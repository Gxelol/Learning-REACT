import P from 'prop-types'
import { useEffect, useRef, useState } from 'react';
import './styles.css';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB)
};

const useFetch = (url, options) => {
  const [resultState, setResult] = useState(null);
  const [loadingState, setLoading] = useState(false);
  const [shouldLoud, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }

  }, [url, options])

  useEffect(() => {
    let wait = false;
    
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);

    const fetchData = async () => {
      await new Promise(r => setTimeout(r, 1000))
      try {
        const response = await fetch(urlRef.current, { signal, ...optionsRef.current });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
          console.warn();
        }
      }
    }

    fetchData();

    return () => {
      wait = true;
      abortController.abort();
    }
  }, [shouldLoud])

  return [resultState, loadingState];
}

export const App = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: '1' + postId,
    }
  });

  if (loading) {
    return <p>Loading...</p>
  }

  const handleClick = async (id) => {
    setPostId(id);
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? result.map((p) =>
        <div key={p.id} onClick={() => handleClick(p.id)}>
          <p>{p.title}</p>
        </div>
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

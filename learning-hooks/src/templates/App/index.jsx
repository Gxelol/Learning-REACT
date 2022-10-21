import { useDebugValue, useEffect, useState } from 'react';
import './styles.css';

const useMediaMatch = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(`Query: ${queryValue}`, name => {
    return name + 'modified';
  })

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    }

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    }
  }, [queryValue])

  return match;
};

export const App = () => {
  const enormous = useMediaMatch('(min-width: 1280px)');
  const huge = useMediaMatch('(max-width: 1279px) and (min-width: 980px)');
  const big = useMediaMatch('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaMatch('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaMatch('(max-width: 320px)');
  const background = enormous? 'darkblue' : huge? 'yellow' : big? 'red' : medium? 'pink' : small? 'cyan' : null
  const color = enormous? 'white' : huge? 'white' : big? 'white' : medium? 'white' : small? 'white' : null

  return (
    <div style={{fontSize: '50px', background, color}}>
      Hello World!
    </div>
  )
};
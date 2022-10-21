import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const ReactHooks = () => {
  console.log('%cCHILD RENDER STARTING...', 'color: #36c236');

  // Lazy Initializer #1
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString();
    console.log('%cState Lazy initializer - (useState + InitialValue) = ' + state, 'color: #36c236');
    return state;
  });
  const renders = useRef(0);

  useEffect(() => {
    console.log('%cuseEffect (UPDATE state1) ' + state1, 'color: #ffed48');
  }, [state1]);

  useEffect(() => {
    console.log('%cuseEffect -> No Dependencies', 'color: #ffed48');
    renders.current += 1;

    return () => {
      console.log('%cuseEffect (Cleanup) -> No Dependencies', 'color: #ffed48');
    };
  });

  useEffect(() => {
    const listener = () => console.log('Listener...');
    console.log('%cuseEffect -> Empty dependencies', 'color: #ffed48');

    return () => {
      console.log('%cuseEffect (Cleanup) -> Empty dependencies', 'color: #ffed48');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('%cuseLayoutEffect', 'color: #ff3a6b');

    return () => {
      console.log('%cuseLayoutEffect (Cleanup)', 'color: #ff3a6b');
    };
  });

  console.log('%cCHILD RENDER ' + renders.current + ' ENDING...', 'color: #36c236');
  return (
    <div onClick={() => setState1(new Date().toLocaleString('pt-br'))} style={{ fontSize: '60px' }}>
      State: {state1}
    </div>
  );
};

export const App = () => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current += 1;
  });

  console.log(`%cPARENT RENDER ${renders.current} STARTING...`, 'color: #36c236');
  const [show, setShow] = useState(false);
  console.log('%cState Initializer - (useState + InitialValue) = ' + show, 'color: #36c236');
  console.log(`%cPARENT RENDER ${renders.current} ENDING...`, 'color: #36c236');

  return (
    <div>
      <p style={{ fontSize: '60px' }} onClick={() => setShow((s) => !s)}>
        Show hooks
      </p>
      {show && <ReactHooks />}
    </div>
  );
};
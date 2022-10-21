import { useLayoutEffect, useRef, useState } from 'react';
import './styles.css';

export const App = () => {
  const [count, setCount] = useState([0, 1 , 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 1500)
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCount((c) => [...c, +c.slice(-1) + 1])
  };
  
  return (
    <>
    <p>Hello World!</p>
    <button onClick={handleClick}>Count {count.slice(-1)}</button>
    <div ref={divRef} style={{height: '200px', width: '200px', overflowY: 'scroll'}}>
      {count.map((c) =>{
        return <p key={c}>{c}</p>
      })};
    </div>
    </>
  )
};
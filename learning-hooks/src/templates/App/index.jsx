/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import './styles.css';

export const App = () => {
  const [count, setCount] = useState([0, 1 , 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCount((c) => [...c, +c.slice(-1) + 1])
    divRef.current.handleClick();
  };
  
  return (
    <>
    <button onClick={ handleClick }>Count { count.slice(-1) }</button>
    <DisplayCount count={count} ref={ divRef } />
    </>
  )
};

export const DisplayCount = forwardRef(function DisplayCount({ count }, ref) {
  const [rand, setRand] = useState('0.32')
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div ref={divRef} style={{height: '200px', width: '200px', overflowY: 'scroll'}}>
      {count.map((c) =>{
        return <p onClick={handleClick} key={c}>{c} {rand}</p>
      })};
    </div>
  )
});
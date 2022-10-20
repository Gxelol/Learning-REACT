import { useEffect, useRef, useState } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb])

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    },  delay)

    return () => clearInterval(interval)
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementer, setIncrementer] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => {setDelay(d => d + incrementer)}}>+{incrementer}</button>
      <button onClick={() => {setDelay(d => d - incrementer)}}>-{incrementer}</button>
      <input type="number" value={incrementer} onChange={(e) => setIncrementer(Number(e.target.value))}/>
    </div>
  )
}

export default App;

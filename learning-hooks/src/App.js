import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({incrementButton}) {
  console.log('rendered');
  return <button onClick={() => incrementButton(10)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  },[]); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <Button incrementButton={incrementCounter} />
      </header>
    </div>
  );
}

export default App;

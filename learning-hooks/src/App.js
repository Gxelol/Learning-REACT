import { useReducer } from 'react';
import './App.css';

export const globalState = {
  title: 'The title',
  body: 'The body body saikou',
  counter: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      return { ...state, title: action.payload }
    }
  }
  switch (action.type) {
    case 'reverse': {
      const { title } = state;
      return {
        ...state, title: title.split('').reverse().join('')
      }
    }
  }
  return { ...state };
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>{title} {counter}</h1>
      <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'reverse' })}>Invert</button>
    </div>
  )
}

export default App;

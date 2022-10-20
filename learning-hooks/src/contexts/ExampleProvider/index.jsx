import P from 'prop-types';
import { useReducer } from 'react'
import { counterReducer } from './reducer'
import { data } from './dataCounter';
import { CounterContext } from './context';

export const CounterProvider = ({ children }) => {
const [counterState, counterDispatch] = useReducer(counterReducer, data);

  return <CounterContext.Provider value={{ counterState, counterDispatch }} >{children}</CounterContext.Provider>
}

CounterProvider.propTypes = {
  children: P.node.isRequired,
}
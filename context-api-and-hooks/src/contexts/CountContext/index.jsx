import P from 'prop-types';
import {
  createContext, useContext, useReducer, useRef,
} from 'react';
import { actionFactory } from './actionFactory';
import { reducer } from './reducer';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(actionFactory(dispatch));

  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>;
};

CountContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCountContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCountContext inside <CountContextProvider />');
  }

  return [...context];
};

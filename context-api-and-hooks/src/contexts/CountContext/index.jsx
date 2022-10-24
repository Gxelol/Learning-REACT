import { createContext, useContext } from 'react';
import P from 'prop-types';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CountContextProvider = ({ children }) => (
  <Context.Provider value={initialState}>{children}</Context.Provider>
);

CountContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCountContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCountContext inside <CountContextProvider />');
  }

  return [{ ...context }];
};

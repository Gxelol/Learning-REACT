import React, { useState } from 'react';
import { initialState } from './data';

// simulating a component 
export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
  <GlobalContext.Provider value={{ state, setState }}>
    {children}
  </GlobalContext.Provider>
  )
}
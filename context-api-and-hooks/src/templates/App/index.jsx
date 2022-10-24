/* eslint-disable react/prop-types */
import React, { Children, cloneElement, createContext, useContext, useState } from 'react';

const s = {
  style: {
    fontSize: '44px',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const turnOn = () => setIsOn(s => !s);

  return <TurnOnOffContext.Provider value={{ isOn, turnOn }}>{children}</TurnOnOffContext.Provider>
};

const On = ({ children }) => { 
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
}

const Off = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext)
  return isOn ? null : children;
}
const TurnButton = ({ ...props }) => {
  const { isOn, turnOn } = useContext(TurnOnOffContext);
  return <button onClick={turnOn} {...props}>Turn {isOn ? 'OFF' : 'ON'}</button>
};

export const App = () => {
  return (
    <TurnOnOff>
      <On></On>
      <Off></Off>
      <TurnButton {...s} ></TurnButton>
    </TurnOnOff>
  ) 
};

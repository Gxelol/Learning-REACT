import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const P = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const { state: {body, counter}, setState } = theContext;
  return <p onClick={() => setState(s => ({...s, counter: s.counter + 1}))}>{body}</p>
}
import P from 'prop-types';
import { useCountContext } from '../../contexts/CountContext';

export const Heading = () => {
  const [state, actions] = useCountContext();

  return <h1>{state.counter}</h1>;
};

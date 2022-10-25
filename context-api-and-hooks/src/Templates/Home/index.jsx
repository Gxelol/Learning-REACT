/* eslint-disable no-console */
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCountContext } from '../../contexts/CountContext';
import './styles.css';

export function Home() {
  const [state, actions] = useCountContext();

  const handleError = async () => {
    try {
      actions.asyncError()
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e.name, ':', e.message);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Heading />
      <Button onButtonClick={actions.increase}>Increase</Button>
      <Button onButtonClick={actions.decrease}>Decrease</Button>
      <Button onButtonClick={actions.reset}>Reset</Button>
      <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>Set 100</Button>
      <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>Async Increase</Button>
      <Button disabled={state.loading} onButtonClick={handleError}>Async Error</Button>
    </div>
  );
}

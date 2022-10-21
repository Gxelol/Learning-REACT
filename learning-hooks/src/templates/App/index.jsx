import { useEffect, useState, Component } from 'react';
import P from 'prop-types';

const style = {
  style: {
    fontSize: '40px',
  },
};

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Updates the state so that the next render will show the alternate UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the bug to a bug reporting service
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render whatever alternative UI
      return <h1>Something went wrong</h1>;
    }

    return this.props.children; 
  }
}

const ThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect (() => {
    if(counter > 3) {
      throw new Error('BAD ERROR');
    }
  }, [counter])

  return <div>
    <button {...style} onClick={() => setCounter((s) => s + 1)}>Increase {counter}</button>
  </div>
}

export const App = () => {
  return (
    <div >
      <MyErrorBoundary>
          <ThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
          <ThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
          <ThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
          <ThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
          <ThrowError />
      </MyErrorBoundary>
    </div>
  )
}

MyErrorBoundary.propTypes = {
  children: P.node,
}
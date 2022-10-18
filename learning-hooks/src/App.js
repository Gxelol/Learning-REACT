import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicked');
}

function App() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - runs every time the component updates
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });
  
  // componentDidMount - run 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

  // componentWillUmount
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);
  
  // With dependency - runs every time the dependency updates
  // useEffect(() => {
  //   console.log('Counter changed for', counter);
  // }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </header>
    </div>
  );
}

// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const reverseClass = reverse ? 'reverse' : '';

//   const handleClick = () => {
//     setReverse((reverse) => !reverse)
//     setCounter((prevCounter) => prevCounter + 1);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//         <h1>Times reversed: {counter}</h1>

//         <button type='button' onClick={handleClick}> Reverse </button>
//       </header>
//     </div>
//   );
// }

// WITHOUT HOOKS 

//       |
//       v

// class App extends Component {
//   state = {
//     reverse: false,
//   };


//   handleClick = () => {
//   const { reverse } = this.state;
//   this.setState({ reverse: !reverse })
//  }

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type='button' onClick={this.handleClick}> Reverse </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

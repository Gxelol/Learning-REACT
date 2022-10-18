import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse)
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Times reversed: {counter}</h1>

        <button type='button' onClick={handleClick}> Reverse </button>
      </header>
    </div>
  );
}

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

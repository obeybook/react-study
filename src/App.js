import React, {Component, Fragment} from 'react';
import MyName from './MyName';
import Counter from './Counter';
import './App.css'

class App extends Component{
  render(){
    return (
      <Fragment>
        <MyName name="북가좌불기둥" />
        <Counter />
      </Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

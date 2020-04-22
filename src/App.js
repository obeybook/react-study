import React, {Component, Fragment} from 'react';
// import PracticeCounter from './practice/PracticeCounter';
// import MyName from './MyName';
// import Counter from './Counter';
// import InputExample from './inputExample';
import PracticeInputExample from './practice/PracticeInputExample';
import './App.css'

class App extends Component{
  propsFnc = (info) => {
    console.log(info)
  }

  render(){
    return (
      <Fragment>
        <PracticeInputExample onCreate={this.propsFnc}/>
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

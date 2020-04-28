import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Counter from './learnMobx/Counter'

class App extends Component{
  render(){
    return (
      <>
        <Counter />
      </>
    )
  }

}

export default App;

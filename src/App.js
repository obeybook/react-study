import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
// import Counter from './learnMobx/Counter'
import SuperMarket from './learnShop/SuperMarket'


class App extends Component{
  render(){
    return (
      <>
        <SuperMarket />
      </>
    )
  }

}

export default App;

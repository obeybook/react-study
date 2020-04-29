import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class Counter extends Component {
  render() {
      const { counter } = this.props;
      return (
          <div>
              <h1>{counter.num}</h1>
              <button onClick={counter.plus}>+</button>
              <button onClick={counter.minus}>-</button>
          </div>
      )
  }
  
}

export default Counter;
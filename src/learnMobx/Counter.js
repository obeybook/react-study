import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

// **** 최하단에 잇던 observer 가 이렇게 위로 올라옵니다.
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
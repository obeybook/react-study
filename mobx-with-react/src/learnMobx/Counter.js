import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { observable, action, computed, autorun, decorate } from 'mobx';
import { observer } from 'mobx-react';

@autobind
class Counter extends Component {
    @observable number = 0;

    @action
    plus = () => {
        this.number++;
    }

    @action
    minus = () => {
        this.number--;
    }

    render(){
        return (
            <>
                <div>{this.number}</div>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </>
        )
    }
}

export default Counter;
import React, { Component } from 'react';
import { observable, reaction, computed, autorun, decorate } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends Component {
    number = 0;

    plus = () => {
        this.number++;
    }

    minus = () =>{
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

    decorate(Counter,{
        number : observable,
        plus : action,
        minus : action

    })
}

export default Counter;
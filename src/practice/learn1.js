import React, { Component } from 'react';

class Learn1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            cnt : 0
        }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

    // state = {
    //     cnt : 0
    // }

    plus() {
        const { cnt } = this.state;
        this.setState({
            cnt : cnt + 1 
        })
    }

    minus() {
        const { cnt } = this.state;
        this.setState({
            cnt : cnt - 1 
        })
    }

    render(){
        const { cnt } = this.state
        return (
            <>
                <div>{cnt}</div>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </>
        )
    }
}

export default Learn1
import React, { Component } from 'react';

class PracticeCounter extends Component{
    state = {
        num : 0
    }
    
    plus = () => {
        this.setState({
            num : this.state.num + 1
        })
    }
    
    minus = () => {
        this.setState({
            num : this.state.num - 1
        })
    }

    render(){
        return(
            <div>
                <div>숫자 세기</div>
                <div>{this.state.num}</div>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}

export default PracticeCounter;
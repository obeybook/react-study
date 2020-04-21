import React, { Component } from 'react';

class inputExample extends Component{
    state = {
        name : ''
    }

    inputChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.inputChange}/>
                <div>{this.state.name}</div>
            </div>
        )
    }
}

export default inputExample;
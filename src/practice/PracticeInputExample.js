import React, { Component } from 'react';

class PracticeInputExample extends Component{
    state = {
        name : '',
        phone : ''
    }

    changeFnc = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitFnc = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
        return(
            <form onSubmit={this.submitFnc}>
                <input type="text" name="name" onChange={this.changeFnc} value={this.state.name}/>
                <input type="text" name="phone" onChange={this.changeFnc} value={this.state.phone}/>
                <div>{this.state.name}</div>
                <div>{this.state.phone}</div>
                <input type="submit" value="결재부탁드립니다!"/>
            </form>
        )
    }
}

export default PracticeInputExample
import React, { Component } from 'react';

class inputExample extends Component{
    state = {
        name : '',
        phone : ''
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="이름" value={this.state.name} onChange={this.inputChange} name="name"/>
                <input type="text" placeholder="전번" value={this.state.phone} onChange={this.inputChange} name="phone"/>
                <div>
                    이름 : {this.state.name}<br/>
                    전화번호 : {this.state.phone}
                </div>
                <button type="submit">+</button>
            </form>
        )
    }
}

export default inputExample;
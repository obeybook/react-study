import React, { Component } from 'react';

class TodoListInfo extends Component{
    render(){
        console.log(this.props)
        return(
            <li>{this.props.contents}</li>
        )
    }
}

export default TodoListInfo;
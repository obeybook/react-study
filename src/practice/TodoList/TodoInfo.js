import React, { Component } from 'react';

class TodoListInfo extends Component{

    render(){
        const { id, name } = this.props;
        return(
            <li><span>{id}</span>{name}</li>
        )
    }
}

export default TodoListInfo;
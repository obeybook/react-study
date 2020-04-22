import React, { Component } from 'react';
import TodoListInfo from './TodoInfo';

class TodoList extends Component{
    render(){
        console.log(this.props.contents[0].name)
        return(
            <div>
                <ul>
                    <TodoListInfo contents={this.props.contents[0].name}/>
                </ul>
            </div>
        )
    }
}

export default TodoList;
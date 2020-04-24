import React, { Component } from 'react';
import TodoListInfo from './TodoInfo';

class TodoList extends Component{
    render(){
        const { data } = this.props;
        const list = data.map(
            info => <TodoListInfo id={info.key} name={info.name} />
        )
        return(
            <div>
                <ul>
                    { list }
                </ul>
            </div>
        )
    }
}

export default TodoList;
import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { inject } from 'mobx-react';

@inject(TodoStore => {
    return {
        todoList : TodoStore.todoList
    }
})

class TodoList extends Component{
    render(){
        const { todoList } = this.props;
        return(
            <TodoListItem  todoLista={todoList.aaa} todoListb={todoList.bbb}/>
        )
    }
}

export default TodoList;
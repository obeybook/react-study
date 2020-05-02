import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { observer, inject } from 'mobx-react';

@inject( ({TodoListStore}) => ({todoList : TodoListStore.todoList}) )

@observer
class TodoList extends Component{
    render(){
        const { todoList } = this.props;
        const todo = todoList.map( item => <TodoListItem todoList={item.todoName} key={item.todoId}/> )
        return(
            <>
              {todo}
            </>
        )
    }
}

export default TodoList;
import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoListInsert from './TodoListInsert';

class TodoListMain extends Component{
    render(){
        return(
            <div className="TodoWrap">
                <TodoHeader />  
                <TodoListInsert />  
                <TodoList />  
            </div>
        )
    }
}

export default TodoListMain;
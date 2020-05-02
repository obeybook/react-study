import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observe } from 'mobx';

@inject( ({TodoListStore}) => ({
    todoAdd : TodoListStore.todoAdd,
    todoOnChange : TodoListStore.todoOnChange,
    todoInput : TodoListStore.todoInput
}) )

@observer
class TodoListInsert extends Component{
    render(){
        const { todoAdd, todoOnChange, todoInput } = this.props;
        return(
            <div className="TodoInsert">
              <input type="text" value={todoInput} onChange={todoOnChange} name="todo"/>
              <button onClick={todoAdd}>+</button>
            </div>
        )
    }
}

export default TodoListInsert;
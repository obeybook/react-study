import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject( ({TodoListStore}) => ({
    todoRemove : TodoListStore.todoRemove,
    todoUpdate : TodoListStore.todoUpdate,
    todoUpdateOnChange : TodoListStore.todoUpdateOnChange,
    todoUpdateSet : TodoListStore.todoUpdateSet,
    todoUpdateInput : TodoListStore.todoUpdateInput,
}) )

@observer
class TodoListItem extends Component{
    render(){
        const { todoList, todoRemove, todoUpdate, todoUpdateSet, todoUpdateOnChange, todoUpdateInput } = this.props;
        if( todoList.todoUpdateStat === true ){
            return(
                <div className="Todo">
                  <div className="TodoName"><b>{todoList.todoId}</b><input value={todoUpdateInput} onChange={todoUpdateOnChange}/></div>
                  <div className="TodoUpdateButton" onClick={ () => todoUpdateSet(todoList.todoId) }>저장</div>
                  <button onClick={ () => todoRemove(todoList.todoId)}>-</button>
                </div>
            )
        }
        return(
            <div className="Todo">
              <div className="TodoName"><b>{todoList.todoId}</b>{todoList.todoName}</div>
              <div className="TodoUpdateButton" onClick={ () => todoUpdate(todoList.todoId) }>수정</div>
              <button onClick={ () => todoRemove(todoList.todoId)}>-</button>
            </div>
        )
    }
}

export default TodoListItem;
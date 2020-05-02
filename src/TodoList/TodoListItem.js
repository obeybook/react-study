import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject( ({TodoListStore}) => ({
    todoRemove : TodoListStore.todoRemove,
    todoUpdate : TodoListStore.todoUpdate,
    todoUpdateState : TodoListStore.todoUpdateState,
}) )

@observer
class TodoListItem extends Component{
    render(){
        const { todoList, key, todoRemove, todoUpdate, todoUpdateState } = this.props;
        console.log(todoList)
        if( todoUpdateState === true ){
            return(
                <div className="Todo">
                  <div className="TodoName"><input value={todoList}></input></div>
                  <div className="TodoUpdateButton" onClick={todoUpdate}>저장</div>
                  <button onClick={ () => todoRemove(key)}>-</button>
                </div>
            )
        }
        return(
            <div className="Todo">
              <div className="TodoName">{todoList}</div>
              <div className="TodoUpdateButton" onClick={todoUpdate}>수정</div>
              <button onClick={ () => todoRemove(key)}>-</button>
            </div>
        )
    }
}

export default TodoListItem;
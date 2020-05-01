import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observe } from 'mobx';

@inject(TodoStore => {
    return {
        todoAdd : TodoStore.todoAdd,
        todoOnChange : TodoStore.todoOnChange,
    }
})

// @observer
class TodoListInsert extends Component{
    render(){
        const { todoAdd, todoOnchange } = this.props;
        return(
            <div className="TodoInsert">
              {/* <input type="text" value={todoOnChange} onChange={todoOnchange} name="todo"/> */}
              <input type="text" name="todo"/>
              <button onClick={todoAdd}>+</button>
            </div>
        )
    }
}

export default TodoListInsert;
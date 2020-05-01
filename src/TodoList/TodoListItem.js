import React, { Component } from 'react';

class TodoListItem extends Component{
    render(){
        const { aaa, bbb} = this.props;
        return(
            <div className="Todo">
              <div>할 일</div>
              <button>-</button>
            </div>
        )
    }
}

export default TodoListItem;
import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
// import Counter from './learnMobx/Counter'
import TodoListMain from './TodoList/TodoListMain';
import './TodoList/Todo.css';


class App extends Component{
  render(){
    return (
      <>
        <TodoListMain />
      </>
    )
  }

}

export default App;

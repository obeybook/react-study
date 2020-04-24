import React, {Component} from 'react';
// import PracticeCounter from './practice/PracticeCounter';
// import MyName from './MyName';
// import Counter from './Counter';
// import InputExample from './inputExample';
// import PracticeInputExample from './practice/PracticeInputExample';

import TodoListHeader from './practice/TodoList/TodoListHeader';
import TodoList from './practice/TodoList/TodoList';
import TodoListInert from './practice/TodoList/TodoListInert';

// import PracticeArrayForm from './practice/PracticeArray/PracticeArrayForm';
// import PracticeArrayInfoList from './practice/PracticeArray/PracticeArrayInfoList';
import './App.css'

class App extends Component{
  // id = 2
  // state = {
  //   information : [
  //     {
  //       id : 0,
  //       name : '오용훈',
  //       phone : '010-4108-8903'
  //     },{
  //       id : 1,
  //       name : '오용훈',
  //       phone : '010-4108-8903'
  //     }
  //   ],
  //   keyword : ''
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     keyword : e.target.value
  //   })
  // }

  // handleCreate = (data) => {
  //   const { information } = this.state;
  //   this.setState({
  //     information : information.concat({
  //       id: this.id++,
  //       ...data
  //     })
  //   })
  // }

  // handleRemove = (id) => {
  //   const { information } = this.state;
  //   this.setState({
  //     information : information.filter(
  //       info => info.id !== id
  //     )
  //   })
  // }

  // handleUpdate = (id, data) => {
  //   const { information } = this.state;
  //   this.setState({
  //     information : information.map(
  //       item => id === item.id
  //         ? {...item, ...data}
  //         : item
  //     )
  //   })
  // }

  // render(){
  //   const { information, keyword } = this.state;
  //   const filteredList = information.filter(
  //     data => data.name === keyword
  //   )
  //   return(
  //     <>
  //       <PracticeArrayForm onCreate={this.handleCreate}/>
  //       <div>
  //         <input type="text" placeholder="search" onChange={this.handleChange} value={keyword} />
  //       </div>
  //       <PracticeArrayInfoList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
  //     </>
  //   )
  // }



  state = {
      todoList : [
      ]
  }
  handleCreate = (list) => {
    const { todoList } = this.state;
    this.setState({
      todoList : todoList.concat({ 
        key : todoList.length, 
        name : list.todo
      })
    })
  }

  render(){
    const { todoList } = this.state;
    return (
      <>
        <TodoListHeader />
        <TodoList data={todoList}/>
        <TodoListInert onCreate={this.handleCreate}/>
      </>
    );
  }

}

export default App;

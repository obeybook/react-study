import { observable, action, computed } from 'mobx';

export default class TodoStore {
    @observable todoList = [];

    @observable todoInput = "";

    @observable todoUpdateState = false;

    id = 0;

    @action todoAdd = () => {
        this.todoList.push({
            todoId : this.id,
            todoName : this.todoInput 
        })
        this.id++;
        this.todoInput = "";
        this.todoUpdateState = false;
        console.log(this.id)
    }

    @action todoRemove = (id) => {
        const removeData = this.todoList.find( item => item.id === id);
        this.todoList.remove(removeData);
        this.todoUpdateState = false;
    }

    @action todoOnChange = (e) => {
        this.todoInput = e.target.value;
    }

    @action todoUpdate = () => {
        this.todoUpdateState = true;
    }
}
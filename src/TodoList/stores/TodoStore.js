import { observable, action, computed } from 'mobx';

export default class TodoStore {
    @observable todoList = [];

    @observable todoInput = "";

    @observable todoUpdateInput = "";

    // @observable todoUpdateState = false;

    id = 0;

    @action todoAdd = () => {
        this.todoList.push({
            todoId : this.id,
            todoName : this.todoInput,
            todoUpdateStat : false,
        })
        this.id++;
        this.todoInput = "";
        // this.todoUpdateState = false;
    }

    @action todoRemove = (id) => {
        const removeData = this.todoList.find( item => item.todoId === id);
        this.todoList.remove(removeData);
        // this.todoUpdateState = false;
    }

    @action todoOnChange = (e) => {
        this.todoInput = e.target.value;
    }

    @action todoUpdate = (id) => {
        const selectData = this.todoList.find( item => item.todoId === id);
        this.todoUpdateInput = selectData.todoName;
        selectData.todoUpdateStat = true;
        // this.todoUpdateState = true;
    }

    @action todoUpdateOnChange = (e) => {
        this.todoUpdateInput = e.target.value;
    }
    
    @action todoUpdateSet = (id) => {
        const selectData = this.todoList.find( item => item.todoId === id);
        selectData.todoName = this.todoUpdateInput;
        selectData.todoUpdateStat = false;
    }
}
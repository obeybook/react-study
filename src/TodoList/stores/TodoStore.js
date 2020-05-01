import { observable, action, computed } from 'mobx';

export default class TodoStore {
    @observable todoList = [
        {
            aaa: 'aaa1',
            bbb: 'bbb2'
        }
    ];

    @observable title = "asd";

    @action todoAdd = () => {
        this.todoList.push({
            aaa : 'aaa',
            bbb: 'bbb'
        })
        console.log(this.todoList)
    }

    // @action todoOnChange = (e) => {
    //     this.title = e.target.value;
    // }
}
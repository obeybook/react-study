import { observable, action, computed } from 'mobx';

export default class TodoInsert {
    @observable todoInput = '';

    constructor(root){
        this.root = root;
    }
}
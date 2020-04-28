import { observable, action } from 'mobx';

export default class Counter {
    @observable num = 0;
  
    @action
    plus = () => {
        this.num++;
    }

    @action
    minus = () => {
        this.num--;
    }
}
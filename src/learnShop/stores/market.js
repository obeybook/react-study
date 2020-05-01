import { observable, action, computed } from 'mobx';

export default class MarketStore {
    @observable selectedItems = [];

    @action add = (name, price) => {
        const exists = this.selectedItems.find( item => item.name === name);
        if( !exists ){
            this.selectedItems.push({
                name,
                price,
                count: 1,
            })
            return;
        }
        exists.count++;
    }

    @action remove = (name) => {
        const removeData = this.selectedItems.find( data => data.name === name);
        removeData.count--;
        if(removeData.count === 0){
            this.selectedItems.remove(removeData)
        }
    }

    @computed get sum(){
        return this.selectedItems.reduce((acc, cur) => {
            return acc + cur.price * cur.count;
        },0);
    }
}
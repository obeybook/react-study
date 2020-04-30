import React from 'react';
import './css/template.css';
import BasketItem from './BasketItem'
import { inject, observer } from 'mobx-react';

const BasketItemList = ({items, sum, remove}) => {
    const itemList = items.map( item => <BasketItem name={item.name} price={item.price} count={item.count} key={item.name} remove={remove}/>)
    return(
        <>
            {itemList}
            <hr/>
            <div>
                <b>총 합 : </b> {sum}원
            </div>
        </>
    )
}

// const BasketItemList = () => {
//     const itemList = items.map( item => <BasketItem {...item} key={items.name} />)
//     return(
//         <div>{itemList}</div>
//     )
// }

export default inject( ({market}) => ({
    items : market.selectedItems,
    sum : market.sum,
    remove : market.remove,
}))(observer(BasketItemList));
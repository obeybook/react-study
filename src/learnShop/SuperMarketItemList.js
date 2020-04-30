import React from 'react';
import './css/template.css';
import SuperMarketItem from './SuperMarketItem'
import { inject, observer } from 'mobx-react';

const items = [
    {
        name : '죠스바',
        price : 900
    },
    {
        name : '이것좀바',
        price : 800
    },
    {
        name : '어딜바',
        price : 1200
    },
    {
        name : '바밤바',
        price : 6500
    }
]

const ShopItemList = ({ onPut }) => {
    const itemList = items.map( item => <SuperMarketItem {...item} key={item.name} onPut={onPut}/>)
    return(
        <div>{itemList}</div>
    )
}

export default inject( ({ market }) => ({
    onPut : market.add,
}))(observer(ShopItemList)
);
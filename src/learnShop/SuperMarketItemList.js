import React from 'react';
import './css/template.css';
import SuperMarketItem from './SuperMarketItem'

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

const ShopItemList = () => {
    const itemList = items.map( item => <SuperMarketItem {...item} key={items.name} />)
    return(
        <div>{itemList}</div>
    )
}

export default ShopItemList;
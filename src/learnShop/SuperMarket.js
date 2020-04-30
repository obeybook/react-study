import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate'
import SuperMarketItemList from './SuperMarketItemList'
import BasketItemList from './BasketItemList'

const SuperMarket = () =>{
    return(
        <SuperMarketTemplate items={<SuperMarketItemList/>} basket={<BasketItemList />}/>
    )
}

export default SuperMarket;
import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate'
import SuperMarketItemList from './SuperMarketItemList'

const SuperMarket = () =>{
    return(
        <SuperMarketTemplate items={<SuperMarketItemList/>} basket={null}/>
    )
}

export default SuperMarket;
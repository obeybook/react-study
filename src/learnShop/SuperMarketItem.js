import React from 'react';
import './css/template.css';

const SuperMarketItem = ({name,price}) =>{
    return(
        <div className="items">
            <h3>{name}</h3>
            <p>{price}원</p>
        </div>
    )
}

export default SuperMarketItem;
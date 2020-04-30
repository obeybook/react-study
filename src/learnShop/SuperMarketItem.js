import React from 'react';
import './css/template.css';

const SuperMarketItem = ({name, price, onPut}) =>{
    return(
        <div className="items" onClick={ () => onPut(name, price) }>
            <h3>{name}</h3>
            <p>{price}원</p>
        </div>
    )
}

export default SuperMarketItem;
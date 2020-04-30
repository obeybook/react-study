import React from 'react';
import './css/template.css';

const BasketItem = ({name, price, count, remove}) =>{
    return(
        <div className="BasketItems">
            <div className="BasketItemName">{name}</div>
            <div className="BasketItemPrice">{price}원</div>
            <div className="BasketItemCount">{count}개</div>
            <button className="BasketItemReturn" onClick={() => remove(name)}>-</button>
        </div>
    )
}

export default BasketItem;
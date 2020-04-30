import React from 'react';
import './css/template.css';

const SuperMarketTemplate = ({items, basket}) =>{
    return(
        <div className="Template">
            <div className="contents-wrap">
                <div className="items-wrap">
                    <h2>상품</h2>
                    <div>{items}</div>
                </div>
                <div className="basket-wrap">
                    <h2>장바구니</h2>
                    <div>{basket}</div>
                </div>
            </div>
        </div>
    )
}

export default SuperMarketTemplate;
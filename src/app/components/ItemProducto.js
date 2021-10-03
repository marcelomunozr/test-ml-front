import React from 'react';
import { Link } from 'react-router-dom';

const ItemProducto = ({
    item,
}) => {
    const {
        picture,
        title,
        price: { amount }
    } = item;

    
    return (
        <Link className="section-products">
            <div className="left-area">
                <img width="160" height="160" src={picture} className="ui-search-result-image__element" alt={title} />
            </div>
            <div className="body-area">
                <h2>${amount.toLocaleString("es-CL")}</h2>
                <p>{title}</p>
            </div>
            <div className="right-area">
                <h4>Ciudad Federal</h4>
            </div>
        </Link>
    )
};

export default ItemProducto

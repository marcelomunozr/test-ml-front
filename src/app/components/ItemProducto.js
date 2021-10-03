import React from 'react';
import { Link } from 'react-router-dom';

const ItemProducto = ({
    item,
}) => {
    const {
        id,
        picture,
        title,
        price: { amount },
        address: { state_name },
    } = item;
    
    return (
        <Link className="section-products" to={`/items/${id}`}>
            <div className="left-area">
                <img width="160" height="160" src={picture} className="ui-search-result-image__element" alt={title} />
            </div>
            <div className="body-area">
                <h2>${amount.toLocaleString("es-AR")}</h2>
                <p>{title}</p>
            </div>
            <div className="right-area">
                <h4>{state_name}</h4>
            </div>
        </Link>
    )
};

export default ItemProducto

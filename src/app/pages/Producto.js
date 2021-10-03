import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../services/products.services';

const Producto = () => {
    const [loading, setLoading] = useState(true);
    const [errorData, setErrorData] = useState(false);
    const [productData, setProductData] = useState(null);
    const { id } = useParams();

    const handleGetDataProducto = async () => {
        try {
            const product = await getProducto(id);
            if (product.status === 200) {
                if (product.data) {
                    setProductData(product.data)
                }
            }
        } catch (error) {
            setErrorData(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetDataProducto();
    }, []);

    const handleRenderContent = () => {
        if (errorData) {
            return (
                <h1>ERROR PRODUCTOS</h1>
            )
        }
        if (loading) {
            return (
                <h1>...CARGANDO</h1>
            )
        }
        const {
            title,
            picture,
            condition,
            price: { amount },
            free_shipping,
            sold_quantity,
            description,
        } = productData.item;
        console.log('productData.item', productData.item);
        const estadoProducto = condition === 'new' ? 'Nuevo' : 'Usado';
        const envioGratis = free_shipping ? 'Sí' : 'No';
        return (
            <div className="single-product">
                <div className="item-area">
                    <div className="left-area">
                        <img width="40%" src={picture} className="ui-search-result-image__element" alt={title} />
                    </div>
                    <div className="right-area">
                        <p className="fs_12 mb_0">{estadoProducto} - {sold_quantity} Vendidos</p>
                        <h1 className="mt_0">{title}</h1>
                        <h4 className="price">${amount.toLocaleString("es-AR")}</h4>
                        <p><strong>Envio gratis: </strong>{envioGratis}</p>
                        <button type="submit" className="ml-button primary">Comprar ahora</button>
                    </div>
                </div>
                <div className="item-area">
                    <p className="fs_14">{description}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="wrapper">
                {handleRenderContent()}
            </div>
        </div>
    );
};

export default Producto

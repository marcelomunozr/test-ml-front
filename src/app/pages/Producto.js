import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetalleProducto, getProducto } from '../services/products.services';

const Producto = () => {
    const [loading, setLoading] = useState(true);
    const [errorData, setErrorData] = useState(false);
    const [productData, setProductData] = useState(null);
    const [productDescripcion, setProductDescripcion] = useState(null);
    const { id } = useParams();

    const handleGetDataProducto = async () => {
        try {
            const product = await getProducto(id);
            const description = await getDetalleProducto(id);
            if (product.status === 200 && description.status === 200) {
                if (product.data && description.data) {
                    setProductData(product.data)
                    setProductDescripcion(description.data)
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
            thumbnail,
        } = productData;
        console.log('productData', productData);
        console.log('productDescripcion', productDescripcion);
        return (
            <div className="single-product">
                <div className="item-area">
                    <div className="left-area">
                        <img width="40%" src={thumbnail} className="ui-search-result-image__element" alt={title} />
                    </div>
                    <div className="right-area">
                        {/* <h2>${amount.toLocaleString("es-AR")}</h2> */}
                        <p>{title}</p>
                    </div>
                </div>
                <div className="description-area">
                    {/* <h4>{state_name}</h4> */}
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

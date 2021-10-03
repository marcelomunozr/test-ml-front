import React, { memo, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getProductosThunk } from '../actions/resultadoBusqueda';
import ItemProducto from '../components/ItemProducto';

const ResultadoBusqueda = ({
    dispatch,
}) => {
    const { search } = useLocation();
    const querySearch = queryString.parse(search).search;
    const [stateSearchValue, setStateSearchValue] = useState(querySearch);

    const {
        errorProductos,
        isLoadingProductos,
        productos,
    } = useSelector((state) => state.resultado);

    const handleSetValueSearh = (valueToSearch) => {
        if (valueToSearch) {
            dispatch(getProductosThunk(valueToSearch));
            setStateSearchValue(valueToSearch);
        }
    };

    useEffect(() => {
        handleSetValueSearh(stateSearchValue);
        return () => {
            setStateSearchValue('');
        }
    }, [stateSearchValue]);

    useEffect(() => {
        setStateSearchValue(querySearch);
    }, [querySearch])

    const handleRenderItems = () => {
        const items = productos.map((item) => {
            return <ItemProducto item={item} key={item.id} />;
        });
        return items;
    };

    const handleRenderContent = () => {
        if (errorProductos) {
            return (
                <h1>ERROR PRODUCTOS</h1>
            )
        }
        if (isLoadingProductos) {
            return (
                <h1>...CARGANDO</h1>
            )
        }
        return handleRenderItems()
    };

    return (
        <div className="container">
            <div className="wrapper">
                {handleRenderContent()}
            </div>
        </div>
    );
};

export default connect()(memo(ResultadoBusqueda));

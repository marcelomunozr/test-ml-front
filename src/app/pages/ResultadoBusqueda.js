import React, { memo, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getProductosThunk } from '../actions/resultadoBusqueda';
import ItemProducto from '../components/ItemProducto';

export const mapStateToProps = (state) => {
    const {
        resultado: {
            products,
            isLoadingProducts,
            errorProducts,
        },
    } = state;
    const reduxState = state;
    return {
        reduxState,
        products,
        isLoadingProducts,
        errorProducts,
    };
};

const ResultadoBusqueda = ({
    dispatch,
}) => {
    // const [stateSearchValue, setStateSearchValue] = useState('');
    const { search } = useLocation();
    const valueSearch = queryString.parse(search).search;

    const {
        errorProductos,
        isLoadingProductos,
        productos,
    } = useSelector((state) => state.resultado);

    const handleSetValueSearh = (valueToSearch) => {
        if (valueToSearch) {
            dispatch(getProductosThunk(valueToSearch));
        }
    };

    useEffect(() => {
        handleSetValueSearh(valueSearch);
        return () => {
            console.log('saliendo de la pantalla');
        }
    }, [valueSearch]);

    useEffect(() => {
        console.log('productos', productos);
        return () => {
            console.log('saliendo de la pantalla');
        }
    }, [productos]);

    const handleRenderItems = () => {
        const items = productos.map((item) => {
            return <ItemProducto item={item} key={item.id} />;
        });
        return items;
    }

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
        return (
            <div className="container">
                <div className="wrapper">
                    {handleRenderItems()}
                </div>
            </div>
        );
    };

    return handleRenderContent();
};

export default connect(mapStateToProps)(memo(ResultadoBusqueda));

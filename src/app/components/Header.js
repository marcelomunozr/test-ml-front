import React, { memo, useEffect, useState } from 'react';
import {
    useHistory,
    Link,
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from "react-icons/hi";
import logo from '../../assets/logo__large_plus@2x.png';
import { setCategorias, setProductos } from '../actions/resultadoBusqueda';

const Header = () => {
    const [valueField, setValueField] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();
    const { categorias } = useSelector((state) => state.resultado);

    const valueSearch = (e) => {
        setValueField(e.target.value)
    };

    const searchProduct = () => {
        history.push(`/items?search=${valueField}`);
    }

    const clearProducts = () => {
        dispatch(setCategorias([]));
        dispatch(setProductos([]));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            clearProducts();
            searchProduct();
        }
    };

    const renderItemsBreadcrums = () => {
        const items = categorias.map((categoria, index) => {
            const { id } = categoria;
            return index < 4 && (
                <li className="breadcrums__item" key={id}>{categoria.name}</li>
            );
        });
        return items;
    };

    const renderBreadcrums = () => {
        if (categorias.length) {
            return (
                <div className="breadcrums">
                    <ul className="breadcrums__list">
                        <li className="breadcrums__item">Búsquedas relacionadas</li>
                        {renderItemsBreadcrums()}
                    </ul>
                </div>
            );
        }
    };

    const goHome = () => {
        setValueField('');
        clearProducts();
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-area">
                        <Link to={`/`} onClick={goHome}>
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="search-area">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar productos, marcas y más…"
                            maxLength={120}
                            onChange={valueSearch}
                            onKeyPress={handleKeyPress}
                            value={valueField}
                        />
                        <button type="submit" className="search-btn" onClick={searchProduct}>
                            <HiOutlineSearch />
                        </button>
                    </div>
                </div>
            </header>
            <div className="container pb_0">
                {renderBreadcrums()}
            </div>
        </>
    )
}

export default connect()(memo(Header));

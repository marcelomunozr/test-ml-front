import React, { memo, useEffect, useState } from 'react';
import {
    useHistory,
    Link,
} from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import { HiOutlineSearch } from "react-icons/hi";
import logo from '../../assets/logo__large_plus@2x.png';

const Header = () => {
    const [valueField, setValueField] = useState('');
    const [categories, setCategories] = useState(null);
    let history = useHistory();
    const { categorias } = useSelector((state) => state.resultado);

    const valueSearch = (e) => {
        setValueField(e.target.value)
    };

    const searchProduct = () => {
        history.push(`/items?search=${valueField}`);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchProduct();
        }
    };

    useEffect(() => {
       if (categorias.lenght) {
           console.log('categorias', categorias)
       }
    }, [categorias]);

    const renderItemsBreadcrums = () => {
        const items = categories.map((categoria) => {
            return (
                <li className="breadcrums__item">{categoria.name}</li>
            );
        });
        return items;
    };

    const renderBreadcrums = () => categories && (
        <div className="breadcrums">
            <ul className="breadcrums__list">
                <li className="breadcrums__item">Búsquedas relacionadas</li>
                {renderItemsBreadcrums()}
            </ul>
        </div>
    );

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-area">
                        <Link to={`/`} onClick={() => setValueField('')}>
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
            <div className="container">
                {renderBreadcrums()}
            </div>
        </>
    )
}

export default connect()(memo(Header));

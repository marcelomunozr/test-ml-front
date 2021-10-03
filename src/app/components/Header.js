import React, { useState } from 'react';
import {
    useHistory,
    Link,
} from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import logo from '../../assets/logo__large_plus@2x.png';

const Header = () => {
    const [valueField, setValueField] = useState('');
    let history = useHistory();

    const valueSearch = (e) => {
        setValueField(e.target.value)
    };

    const searchProduct = () => {
        console.log('valueField', valueField);
        history.push(`/items?search=${valueField}`);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchProduct();
        }
    };

    const renderBreadcrums = () => (
        <div className="breadcrums">
            <ul className="breadcrums__list">
                <li className="breadcrums__item">1</li>
                <li className="breadcrums__item">2</li>
                <li className="breadcrums__item">3</li>
                <li className="breadcrums__item">4</li>
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

export default Header;

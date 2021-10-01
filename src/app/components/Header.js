import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import logo from '../../assets/logo__large_plus@2x.png';

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="logo-area">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="search-area">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar productos, marcas y más…"
                        maxlength="120"
                        autocapitalize="off"
                        autocorrect="off"
                        spellcheck="false"
                        autocomplete="off"
                        tabindex="3"
                    />
                    <button type="submit" className="search-btn">
                        <HiOutlineSearch />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
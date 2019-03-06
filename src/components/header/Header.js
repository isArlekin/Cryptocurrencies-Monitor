import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.sass'

function Header() {
    return (
        <header className="Header">
            <h1 className="title">Cryptocurrencies Monitor</h1>

            <div className="navigation">
                <NavLink exact to="/" activeClassName="-active" className='navigation__link'>Top 10</NavLink>
                <NavLink to="/dashboard" activeClassName="-active" className='navigation__link'>Dashboard</NavLink>
            </div>
        </header>
    );
}

export default Header;

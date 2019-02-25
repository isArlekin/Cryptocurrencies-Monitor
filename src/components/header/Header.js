import React, { Component } from 'react';
import './Header.sass'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1 className="title">Cryptocurrencies Monitor</h1>
            </header>
        );
    }
}

export default Header;

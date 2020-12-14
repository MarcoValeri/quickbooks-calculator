import React from 'react';

// Import scss file
import './navbar.scss';

// Import logo
import logo from '../../images/quickbooks-logo.svg';

const Navbar = () => {
    return (
        <nav>
            <img className="navbar-logo" src={logo} alt="Quickbooks Logo" />
            <ul>
                <li></li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </nav>
    )
};

export default Navbar;
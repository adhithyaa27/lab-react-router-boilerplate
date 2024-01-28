// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Kalvium ❤️</Link>
            </div>
            <div id='flexbox'>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/contacts">Contacts</Link></div>
            </div>
            
        </nav>
    );
};

export default Navbar;

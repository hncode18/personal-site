import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div id="navbar">
            <div id="left-nav">
                <Link to="/">H.N.</Link>
            </div>
            <div id="right-nav">
                <Link to="/project">Projects</Link>
            </div>
        </div>
    );
}

export default Navbar;
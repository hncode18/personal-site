import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import resume from './Resume.pdf';

function Navbar(props) {
    return (
        <div id="navbar">
            <div id="left-nav">
                <Link to="/">H.N.</Link>
            </div>
            <div id="right-nav">
                <Link to="/project">Projects</Link>
                <a href={resume}>Resume</a>
            </div>
        </div>
    );
}

export default Navbar;
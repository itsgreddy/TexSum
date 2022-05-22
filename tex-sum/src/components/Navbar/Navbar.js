import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Navbar() {
    return (
        <nav className="navBar">

            <button className='logo-button'>
                <Link to="/" className="nav-logo-link">
                    <img src="./logo.png" alt="TexSum Logo" className='navBarLogo' />
                </Link>
            </button>

            <ul className="navContent">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">How does it work?</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to=" ">Service</Link>
                </li>
            </ul>

            <Link to="/login">
                <button className="loginButton">
                    Log In
                </button>
            </Link>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Navbar() {
    return (
        <div className="blur">
            <nav className="navBar">

                <Link to="/" className="logo-button">
                    <img src="./logo.png" alt="TexSum Logo" className='navBarLogo' />
                </Link>

                <ul className="navContent">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#how-does-it-work">How does it work?</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>

                <Link to="/login" className='logo-button'>
                    <button className="loginButton">
                        Log In
                    </button>
                </Link>

            </nav>
        </div>


    )
}

export default Navbar;
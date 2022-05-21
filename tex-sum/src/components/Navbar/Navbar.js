import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import LoginPage from '../../pages/Login/Login.js'

function Navbar() {
    return (
        <nav className="navBar">

            <Link to="/"><img src="./logo.png" alt="TexSum Logo" className='navBarLogo'></img></Link>

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
                <button className="loginButton" href={LoginPage}>
                    Log In
                </button>
            </Link>

        </nav>
    )
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import MenuItems from './MenuItems.js';
import LoginPage from '../../pages/Login/Login.js'

function Navbar() {
    return (
        <nav className="navBar">
            <img src="./logo.png" alt="TexSum Logo" className='navBarLogo' />
            <ul className="navContent">
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <a className={item.className} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button className="loginButton" href={LoginPage}>
                Log In
            </button>
        </nav>
    )
}

export default Navbar;
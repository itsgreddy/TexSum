import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Navbar() {
    return (
        <ul className='first'>
            <Link to='/' style={{ textDecoration: "none" }}>HOME</Link>
            <Link to='/login' style={{ textDecoration: "none" }}>LOGIN</Link>
            <Link to='/register' style={{ textDecoration: "none" }}>REGISTER</Link>
            <Link to='/contact' style={{ textDecoration: "none" }}>CONTACT</Link>
        </ul>
    )
}

export default Navbar;
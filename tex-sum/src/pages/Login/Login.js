import React from 'react';
import SawoLogin from '../SawoLogin/SawoLogin';
import './Login.css'

function login() {
    return (
        <div className='first'>
            <h1>Welcome to the Login page!</h1>
            <div className="sawo">
                <SawoLogin />
            </div>
        </div>
    )
}

export default login;
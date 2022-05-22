import React from 'react';
import Cards from '../../components/Cards/Cards';
import './Landing.css'

function landing() {
    return (
        <div className="landing">
            <div className='hero-container'>
                <h1>HOW DOES IT WORK?</h1>
                <p>Find it out!</p>
                <Cards />
            </div>
        </div>

    )
}

export default landing;
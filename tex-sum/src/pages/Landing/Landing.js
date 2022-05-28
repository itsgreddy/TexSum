import React from 'react';
import Cards from '../../components/Cards/Cards';
import Summarize from '../../components/Summarize/Summarize'
import './Landing.css'

function landing() {
    return (
        <div className="landing" id='/home'>
            <Summarize />
            <div className='hero-container'>
                <h1 id='how-does-it-work'>HOW DOES IT WORK?</h1>
                <h2>Find it out!</h2>
                <div className="howwork">
                    <h3>Bla Bla.... This is how we work Nigga!</h3>
                </div>
                <Cards />
            </div>
        </div>


    )
}

export default landing;
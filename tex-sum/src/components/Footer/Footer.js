import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="glass">
                <div className="contact-container">
                    <h1>Reach Us</h1>
                    <div className="logo-container">
                        <button className='logo-button'>
                            <Link to="/" >
                                <img src="./instagram_logo.png" alt="Instagram Logo" className='logo-image'/>
                            </Link>
                        </button>
                        <button className='logo-button'>
                            <Link to="/">
                                <img src="./twitter_logo.png" alt="Twitter Logo" className='logo-image'/>
                            </Link>
                        </button>
                        <button className='logo-button'>
                            <Link to="/">
                                <img src="./linkedin_logo.png" alt="Linked In Logo" className='logo-image'/>
                            </Link>
                        </button>
                    </div>
                    <h3>Made with 💜 by TexSum</h3>
                </div>
            </div>
            <div className="glass">
                <form action="" className='feedback-form'>
                    <h1>Give us your feedback</h1>
                    <div className="feedback-container">
                        <input type="text" placeholder='Name' className='input-field'/>
                    </div>
                    <div className="feedback-container">
                        <input type="text" placeholder='Email' className='input-field'/>
                    </div>
                    <div className="feedback-container">
                        <textarea cols="15" rows="5" placeholder='Enter your feedback here'></textarea>
                    </div>
                    <div className="feedback-container">
                        <button className='glass'>Submit Feedback</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer;
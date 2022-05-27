import React from 'react';
import './Contact.css'
import {Link} from 'react-router-dom'

function contact() {
    return (
        <div className='contactUs'>
            <div className="glass">
                <div className="text">
                    <h1>Contact Us</h1>
                    <div className="underline"></div>
                    <p>Do you have a question, need help with a problem ?
                        Or do you simply want to communicate with us ?
                        Please feel free to contact us.
                    </p>
                </div>
                <div className="split">
                    <div className="left-container">
                        <div className="form-container">
                            <div className="row">
                                <div className="input-container">
                                    <h3>Name</h3>
                                        <input type="text" placeholder='Name' className='full-input-field'/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-container first-input-field" >
                                    <h3>Phone Number</h3>
                                    <input type="number" placeholder='Phone Number'  className='half-input-field'/>
                                </div>
                                <div className="input-container">
                                    <h3>Email Address</h3>
                                    <input type="email" placeholder='Email Address' className='half-input-field'/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-container">
                                    <h3>Company Name (optional)</h3>
                                    <input type="text" placeholder='Company Name' className='full-input-field'/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-container">
                                    <h3>Message</h3>
                                    <textarea cols="30" rows="10" placeholder='Enter your message here...' className='full-input-field'></textarea>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="right-container">
                        <h2>Lets Connect!</h2>
                        <div className="logo-container">
                            <button className='logo-button'>
                                <Link to="/" >
                                    <img src="./twitter_logo.png" alt="Twitter Logo" className='logo-image'/>
                                </Link>
                            </button>
                            <button className='logo-button'>
                                <Link to="/">
                                    <img src="./instagram_logo.png" alt="Instagram Logo" className='logo-image'/>
                                </Link>
                            </button>
                            <button className='logo-button'>
                                <Link to="/">
                                    <img src="./linkedin_logo.png" alt="Linked In Logo" className='logo-image'/>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <Link to="/" className='contactus-button-link'>
                    <button className='contactus-now-button'>Contact us now!</button>
                </Link>
            </div>
        </div>
    )
}

export default contact;
import React from 'react';
import './Contact.css'

function contact() {
    return (
        <div class="wrapper">
            <header>Send us a Message</header>
            <form action="#">
                <div class="dbl-field">
                    <div class="field">
                        <input type="text" name="name" placeholder="Enter your name"></input>
                        <i class='fas fa-user'>Name</i>
                    </div>
                    <div class="field">
                        <input type="text" name="email" placeholder="Enter your email"></input>
                        <i class='fas fa-envelope'>Mail</i>
                    </div>
                </div>
                <div class="dbl-field">
                    <div class="field">
                        <input type="text" name="phone" placeholder="Enter your phone"></input>
                        <i class='fas fa-phone-alt'>Phone</i>
                    </div>
                    <div class="field">
                        <input type="text" name="website" placeholder="Enter your website"></input>
                        <i class="fas fa-globe">Website</i>
                    </div>
                </div>
                <div class="message">
                    <textarea placeholder="Write your message" name="message"></textarea>
                    <i class="material-icons">message</i>
                </div>
                <div class="button-area">
                    <button type="submit">Send Message</button>
                    <span></span>
                </div>
            </form>
        </div>
    )
}

export default contact;
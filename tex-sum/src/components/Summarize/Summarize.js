import React from 'react';
import './Summarize.css';

function Summarize() {
    return (
        <div className="sum">
            <h1>SUMMARIZE YOUR CONTENT IN 1-CLICK</h1>

            <div className="contents">

                <div className="container">
                    <h2>Orginal Content</h2>
                    <div className="enter">
                        <textarea cols="90" rows='20' placeholder="Your text content here.." />
                    </div>
                </div>

                <div className="container">
                    <h2>Summarized Content</h2>
                    <div className="enter">
                        <textarea cols="90" rows='20' placeholder="Your TexSum content here.." />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Summarize;
import React, { useState } from 'react'
import './Modal.css'

function Modal({ closeModal }) {
    return (
        <div className="blurShit">
            <div className='modalBackground'>
                <div className="modalContainer">

                    <div className="modal">
                        <h2>Translate Content</h2>
                        <div className="modalContent">
                            <textarea cols="90" rows='20' placeholder="Your translated content here.." />
                        </div>
                    </div>

                    <div className="modalFooter">
                        <button className='closeBtn' onClick={() => { closeModal(false) }}>Close</button>
                        <div className="language-menu">
                            <button className="selected-language">
                                English
                            </button>
                            <ul>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language</a>
                                </li>
                                <li>
                                    <a href="">Language </a>
                                </li>
                                <li>
                                    <a href="">Language </a>
                                </li>
                                <li>
                                    <a href="">Language </a>
                                </li>
                                <li>
                                    <a href="">Language </a>
                                </li>
                                <li>
                                    <a href="">Language </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Modal
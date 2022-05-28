import React from 'react'
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
                            <div className="selected-language">
                                English
                            </div>

                            <ul>
                                <li>
                                    <a href="">Language 1</a>
                                </li>
                                <li>
                                    <a href="">Language 2</a>
                                </li>
                                <li>
                                    <a href="">Language 3</a>
                                </li>
                                <li>
                                    <a href="">Language 4</a>
                                </li>
                                <li>
                                    <a href="">Language 5</a>
                                </li>
                                <li>
                                    <a href="">Language 6</a>
                                </li>
                                <li>
                                    <a href="">Language 7</a>
                                </li>
                                <li>
                                    <a href="">Language 8</a>
                                </li>
                                <li>
                                    <a href="">Language 9</a>
                                </li>
                                <li>
                                    <a href="">Language 10</a>
                                </li>
                                <li>
                                    <a href="">Language 11</a>
                                </li>
                                <li>
                                    <a href="">Language 12</a>
                                </li>
                                <li>
                                    <a href="">Language 13</a>
                                </li>
                                <li>
                                    <a href="">Language 14</a>
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
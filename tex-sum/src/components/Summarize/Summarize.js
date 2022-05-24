import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Summarize.css';
// import Navbar from '../Navbar/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom'

function Summarize() {

    const [openModal, setopenModal] = useState(false)

    return (
        <>

            <div className="bleh">
                {/* <Navbar /> */}
                {openModal && <Modal closeModal={setopenModal} />}
            </div>

            <div className="sum">

                <h1>SUMMARIZE YOUR CONTENT IN 1-CLICK</h1>
                <div className="urlBar">
                    <input type="text" placeholder='Enter article URL' className='url' />
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> */}
                </div>

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

                <div className="output">

                    <div className="summarize">
                        <button className='sumBtn'>Summarize</button>
                    </div>

                    <div className="popup">
                        <button className='popupBtn' onClick={() => { setopenModal(true) }}>Translate</button>
                    </div>

                </div>

                {/* <button>
                    <Link to="/#" className='popUp'> Translate </Link>
                </button>

                <div className="output" id="blur">
                    <div className="summarize">
                        <a href='#'>Summarize</a>
                    </div>
                    <div className="popup">
                        <a href='#' onClick='toggle()'>Translate</a>
                    </div>
                </div> */}

            </div>

        </>
    );
}
export default Summarize;
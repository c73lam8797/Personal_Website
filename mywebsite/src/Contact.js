import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import pdf from './CharmaineLam_Resume.pdf'
import './index.css'
import './contact.css'

export default function Contact () {
    return (
        <div className="contact" id="contact">
            <div className="placeholder"></div>

            <h1 id="title">— CONTACT —</h1>
            <h3 id="subtitle">testing</h3>

            <div className="contact_info"> 
                <div id="contact_info">
                    <p>
                        <FontAwesomeIcon style={{marginRight: "10px"}} icon = {faEnvelope} size="3x" />
                        c73lam@edu.waterloo.ca</p>   
                {/* </div>
                <div id="contact_info">  */}
                    <p>
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon id="icon" style={{marginRight: "10px", color: "white"}} icon = {faDownload} size="3x" />
                        </a>
                        Resume</p>
                </div>
            </div>
        </div>
    )
}
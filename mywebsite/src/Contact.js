import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import pdf from './CharmaineLam_Resume.pdf'

export default function Contact () {
    return (
        <div className="contact" id="contact">
            <div style={{width: "100%", height: "62px"}}></div>
            <h1>Contact</h1> 
            <div style = {{display: "inline"}}>
                <p style ={{verticalAlign: "middle"}}>
                    <FontAwesomeIcon style={{marginRight: "10px"}} icon = {faEnvelope} size="3x" />
                    c73lam@edu.waterloo.ca</p>   
            </div>
            <div style = {{display: "inline"}}> 
                <p style ={{verticalAlign: "middle"}}>
                    <a href={pdf} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon id="icon" style={{marginRight: "10px", color: "white"}} icon = {faDownload} size="3x" />
                    </a>
                    Download Resume</p>
            </div>
        </div>
    )
}
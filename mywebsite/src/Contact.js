import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import pdf from './CharmaineLam_Resume.pdf'
import './index.css'
import './contact.css'

export default function Contact () {
    useEffect(() => {
        const icon = document.getElementById("icon");
        icon.addEventListener('touchstart', handleTouch);
        icon.addEventListener('mouseenter', hoverFunction);
        icon.addEventListener('mouseleave', leaveFunction);
    });

    const handleTouch = ()=> {
        const icon = document.getElementById("icon");
        icon.style.color = "#3e5d86";
        setTimeout(()=>icon.style.color="white", 2000);
    }

    const hoverFunction = () => {
        const navbar = document.getElementById("icon");
        navbar.style.color = "#3e5d86";
    };

    const leaveFunction = () => {        
        const navbar = document.getElementById("icon");
        navbar.style.color = "white";

    }
    
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
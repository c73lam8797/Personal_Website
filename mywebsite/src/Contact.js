import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import pdf from './Media/CharmaineLam_Resume.pdf'
import './CSS/index.css'
import './CSS/contact.css'

export default function Contact () {
    useEffect(() => {
        const icon = document.getElementById("icon");
        icon.addEventListener('touchstart', handleTouch, {passive: true});
        icon.addEventListener('mouseenter', hoverFunction);
        icon.addEventListener('mouseleave', leaveFunction);
    });

    const handleTouch = ()=> {
        const icon = document.getElementById("icon");
        icon.style.color = "#3e5d86";
        setTimeout(()=>icon.style.color="white", 2000);
    };

    const hoverFunction = () => {
        const navbar = document.getElementById("icon");
        navbar.style.color = "#3e5d86";
    };

    const leaveFunction = () => {        
        const navbar = document.getElementById("icon");
        navbar.style.color = "white";
    };
    
    return (
        <div className="contact" id="contact">
            <div className="placeholder"></div>

            <div className = "content">
                <h1 id="title">— CONTACT —</h1>
                <h3 className="subtitle">Let's connect!</h3>
                <h3 className="subtitle">I am always looking to create new <span className="color">relationships</span>, whether it's for a bubble tea (or coffee) chat or an opportunity to collaborate <span role="img" aria-label="smile">{'\u00A0'}🙂</span></h3>
                <h3 className="subtitle">I am best reached through email or a message on LinkedIn.</h3>

                <div className="contact_info"> 
                    <div id="info">
                        <p id="email">
                        <FontAwesomeIcon style={{marginRight: "10px", marginBottom:"-10px"}} icon = {faEnvelope} size="3x" />
                        c73lam@edu.waterloo.ca</p>   
                        <p id="resume">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon id="icon" style={{marginRight: "10px", marginBottom:"-10px", color: "white"}} icon = {faDownload} size="3x" />
                        </a>
                        Download Resume</p>
                    </div>
                </div>
            </div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
        </div>
    )
}
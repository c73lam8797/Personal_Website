import React from 'react';
import './index.css';
import './aboutme.css';
import pic from './profile_pic.jpg'

export default function AboutMe() {
    return (
        <div className="about" id="about"> 
            <div className="placeholder"></div>

            <h1>— ABOUT ME —</h1>

            <div id="description">             
                <img
                    id = "profile"
                    src = {pic}
                    alt = "Profile"
                    border =  "3"
                    >
                </img>
                <p>
                    Insert Something Here
                </p>
            </div>
        </div>
    )
}
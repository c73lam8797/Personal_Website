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
                <p>Born Canadian and proudly Asian — my name is Charmaine and I am a Biomedical Engineering student at the University of Waterloo. </p>
                <p>Here's 5 quick facts about me: </p>
                <ul>
                    <li>1. Testing</li>
                    <li>2. Testing</li>
                    <li>3. Testing</li>
                    <li>4. Testing</li>
                    <li>5. Testing</li>
                </ul>
            </div>
        </div>
    )
}
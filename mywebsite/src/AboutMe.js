import React from 'react';
import './index.css';
import pic from './profile_pic.jpg'

export default function AboutMe() {
    return (
        <div className="about" id="about"> 
            <h1>About Me</h1>
            <img
                src = {pic}
                alt = "Profile"
                style = {{
                    position: "relative",
                    width: "300px",
                    visibility: "visible",
                    // display: "block",
                }}
            >
            </img>
            <p>Insert something here</p>
        </div>
    )
}
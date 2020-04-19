import React from 'react';
import './index.css';

export default function NavBar() {
    return (
        <div className="NavBar">
            <ul>
                <li><a href = "/#home">Home</a></li>
                <li><a href = "/#about">About Me</a></li>
                <li><a href = "/#contact">Contact</a></li>
            </ul> 
        </div>
    );
};
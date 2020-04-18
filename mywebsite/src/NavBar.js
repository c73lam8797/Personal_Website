import React from 'react';
import './index.css';
// import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

// import Home from './Home';
// import AboutMe from './AboutMe';
// import Main from './Main';

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
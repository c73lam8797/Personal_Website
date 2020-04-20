import React, { useEffect } from 'react';
import './index.css';


export default function NavBar() {
    useEffect(() => {
        const navbar = document.getElementById("nb");
        window.addEventListener('scroll', scrollFunction);
        navbar.addEventListener('mouseenter', hoverFunction);
        navbar.addEventListener('mouseleave', leaveFunction);
    });

    const scrollFunction = () => {
        const navbar = document.getElementById("nb");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            navbar.style.backgroundColor = "black";
            navbar.style.opacity=1;
        }
        else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.opacity=0.5;
        }
    };

    const hoverFunction = () => {
        const navbar = document.getElementById("nb");
        navbar.style.backgroundColor = "black";
        navbar.style.opacity=1;
    };

    const leaveFunction = () => {        
        const navbar = document.getElementById("nb");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            navbar.style.backgroundColor = "black";
            navbar.style.opacity=1;
        }
        else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.opacity=0.5;
        }
    }

    return (
        <div className="NavBar">
            <ul id="nb">
                <li><a href = "/#home">Home</a></li>
                <li><a href = "/#about">About Me</a></li>
                <li><a href = "/#whatido">What I Do</a></li>
                <li><a href = "/#contact">Contact</a></li>
            </ul> 
        </div>
    );
}; 
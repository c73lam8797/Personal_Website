import React, { useState, useEffect } from 'react';
import './index.css';
import './header_footer.css';


export default function NavBar() {
    const [resize, handleResize] = useState(false);
    const [clicked, handleClick] = useState(false);

    useEffect(() => {
        if(document.body.contains(document.getElementById('nb'))) {
            const navbar = document.getElementById("nb");
            navbar.addEventListener('mouseenter', hoverFunction);
            navbar.addEventListener('mouseleave', leaveFunction);
        }
        
        window.addEventListener('scroll', scrollFunction);
        window.addEventListener('resize', resizeFunction);
    });

    useEffect(() => {
        if(document.body.contains(document.getElementById('drop_nb'))) {
            const navbar = document.getElementById("drop_nb");
            navbar.style.display= "none";
        }
    }, []);

    const scrollFunction = () => {
        if(document.body.contains(document.getElementById('nb'))) {
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
    };

    const hoverFunction = () => {
        if(document.body.contains(document.getElementById('nb'))) {
            const navbar = document.getElementById("nb");
            navbar.style.backgroundColor = "black";
            navbar.style.opacity=1;
        }
    };

    const leaveFunction = () => {        
        if(document.body.contains(document.getElementById('nb'))) {
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
    }

    function dropdown () {
        handleClick(!clicked);
        if(document.body.contains(document.getElementById('drop_nb'))) {
            const navbar = document.getElementById('drop_nb');
            if (navbar.style.display === "none") {
                navbar.style.display = "block"
            }
            else {
                navbar.style.display = "none"
            }
        }
    }

    const display_navbar = 
        <div className="NavBar">
            <ul id="nb">
                <li><a href = "/#home">HOME</a></li>
                <li><a href = "/#about">ABOUT ME</a></li>
                <li><a href = "/#whatido">WHAT I DO</a></li>
                <li><a href = "/#contact">CONTACT</a></li>
            </ul> 
        </div> 

    const drop_navbar =
        <div className="DropNavBar" id="DropNavBar">
            <button id="toggle" onClick={dropdown}>{clicked? "close":"open"}</button>
            <ul id="drop_nb">
                <li id="panel" ><a href = "/#home">HOME</a></li>
                <li id="panel" ><a href = "/#about">ABOUT ME</a></li>
                <li id="panel" ><a href = "/#whatido">WHAT I DO</a></li>
                <li id="panel" ><a href = "/#contact">CONTACT</a></li>
            </ul> 
        </div>
    
    const resizeFunction = () => {
        if(window.innerWidth < 1024) {
            handleResize(true);
            if(document.body.contains(document.getElementById('drop_nb'))) {
                const navbar = document.getElementById("drop_nb");
                navbar.style.backgroundColor = "black";
                navbar.style.opacity=1;
                navbar.style.display="none";
            }
        }
        else {
            handleResize(false);
            scrollFunction();
        }
    }

    if (resize || window.innerWidth < 1024) {
        return (
            drop_navbar
        )
    }
    else {
        return (
            display_navbar
        )
    }
}; 
import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './CSS/index.css';
import './CSS/header_footer.css';
import Switch from '@material-ui/core/Switch';

const NavBar = forwardRef( 
    (props, ref) => {
    const [resize, handleResize] = useState( window.innerWidth <= 1024 ? true:false);
    const [clicked, handleClick] = useState(false);

    useImperativeHandle(ref, () => ({
        scroll: () => {
            scrollFunction();
        }
    }));


    useEffect(() => {
        let navbar;
        if(document.body.contains(document.getElementById('nb'))) {  navbar = document.getElementById("nb"); }
        if(document.body.contains(document.getElementById('placeholderBar'))) { 
            navbar = document.getElementById("placeholderBar"); 
            navbar.addEventListener('touchstart', scrollFunction, {passive: true})
        }
        navbar.addEventListener('mouseenter', hoverFunction);
        navbar.addEventListener('mouseleave', leaveFunction);
        

        if(document.body.contains(document.querySelector('.nav'))) {
            document.querySelectorAll('.nav').forEach(item => {
                item.addEventListener('touchstart', function(){
                    item.style.borderBottom= "2px solid white";
                    item.style.color = "#b7cfee"
                    setTimeout(()=>{
                        item.style.borderBottom = "none";
                        item.style.color = "white";
                    }, 2000);  
                }, {passive: true});
                item.addEventListener('mouseenter', function(){
                    item.style.borderBottom= "2px solid white";
                    item.style.color = "#b7cfee"   
                });
                item.addEventListener('mouseleave', function(){
                    item.style.borderBottom= "none";
                    item.style.color = "white"  
                });
            })
        }

        window.addEventListener('resize', resizeFunction);       

    });

    useEffect(() => {
        if(document.body.contains(document.getElementById('drop_nb'))) {
            const dropdown = document.getElementById("drop_nb");
            hideDropdownMenu(dropdown);
        }
    }, []);
    
    const handleChange = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) { props.handleShowVideo(true); }
        else { props.handleShowVideo(false); }
    }

    const showBar = (navbar) => {
        navbar.style.backgroundColor = "black";
        navbar.style.opacity=1;
    }

    const hideNavBar = (navbar) => {
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity=0.5;
    }

    const hideDropdownBar = (navbar) => {
        navbar.style.opacity=0.5;
    }

    const hideDropdownMenu = (dropdown) => {
        dropdown.style.backgroundColor = "black";
        dropdown.style.visibility="hidden";
        dropdown.style.opacity=0;
    }

    const scrollFunction = () => {
        let navbar;
        if(document.body.contains(document.getElementById('nb'))) {
            navbar = document.getElementById("nb");
            if (props.sb.current.getScrollTop() > 200) { showBar(navbar); }
            else { hideNavBar(navbar); }
        } 
        else {
            navbar = document.getElementById("placeholderBar")
            if (props.sb.current.getScrollTop() > 200) { showBar(navbar); }
            else if (!clicked) { hideDropdownBar(navbar); }
        }
    };

    const hoverFunction = () => {
        if (!clicked) {
            let navbar;
            if (document.body.contains(document.getElementById('nb'))) { navbar = document.getElementById("nb"); }
            else { navbar = document.getElementById("placeholderBar"); }
            showBar(navbar);
        }
    };

    const leaveFunction = () => {    
        if (!clicked) {
            scrollFunction();
        } 
    }

    function dropdown () {
        handleClick(!clicked);
       
        if(document.body.contains(document.getElementById('drop_nb'))) {
            const dropdown = document.getElementById('drop_nb');
            const header = document.getElementById("placeholderBar");
            if (dropdown.style.visibility === "hidden") {
                dropdown.style.visibility = "visible"
                dropdown.style.transition = "opacity 0.5s ease-in"
                dropdown.style.opacity = 1;

                header.style.opacity = 1;
                header.removeEventListener('mouseenter', hoverFunction);
                header.removeEventListener('mouseleave', leaveFunction);
            }
            else {
                hideDropdownMenu(dropdown);
                scrollFunction();
            }
        }
    }

    const resizeFunction = () => {
        handleClick(false);
        if(window.innerWidth <= 1024) {
            handleResize(true);
            if(document.body.contains(document.getElementById('drop_nb'))) {
                const dropdown = document.getElementById("drop_nb");
                hideDropdownMenu(dropdown);
            }
        }
        else {
            handleResize(false);
            scrollFunction();
        }
    }

    const display_navbar = 
        <div className="NavBar">
            <ul id="nb">
                <li><a className="nav" href = "/#home">HOME</a></li>
                <li><a className="nav" href = "/#about">ABOUT ME</a></li>
                <li><a className="nav" href = "/#whatido">WHAT I DO</a></li>
                <li><a className="nav" href = "/#photos">PHOTOS</a></li>
                <li><a className="nav" href = "/#contact">CONTACT</a></li>
                <div id="switch_container">
                    <Switch checked={props.showVideo} size="small" color="primary" classes={{root:'switch'}} onChange={handleChange}/>
                </div>
            </ul> 
        </div> 

    const drop_navbar =
        <div className="DropNavBar" id="DropNavBar">
            <div id="placeholderBar">
                <div style={{display: "inline-block", position:"relative"}}> 
                    <button id="toggle" onClick={dropdown}>
                        {clicked? <FontAwesomeIcon icon={faWindowClose} size="1x" />:<FontAwesomeIcon icon={faAlignJustify} size="1x" />}
                    </button>
                </div>
                <div id="switch_container" >
                    <Switch checked={props.showVideo} size="small" color="primary" classes={{root:'switch'}} onChange={handleChange}/>
                </div>    
            </div>
            <ul id="drop_nb">
                <li><a href = "/#home">HOME</a></li>
                <li><a href = "/#about">ABOUT ME</a></li>
                <li><a href = "/#whatido">WHAT I DO</a></li>
                <li><a href = "/#photos">PHOTOS</a></li>
                <li><a href = "/#contact">CONTACT</a></li>
            </ul> 
        </div>
    
    return (
        (resize || window.innerWidth <= 1024) ? drop_navbar: display_navbar
    )
}); 

export default NavBar;
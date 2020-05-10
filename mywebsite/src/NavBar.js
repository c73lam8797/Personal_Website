import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './CSS/index.css';
import './CSS/header_footer.css';
import Switch from '@material-ui/core/Switch';

import DropdownNavBar from './DropdownNavBar';
import LinearNavBar from './LinearNavBar';

const NavBar = forwardRef( 
    ({sb, showVideo, handleShowVideo}, ref) => {
    const [resize, handleResize] = useState( window.innerWidth <= 1024 ? true:false);
    const [clicked, handleClick] = useState(false);

    useImperativeHandle(ref, () => ({
        scroll: () => {
            scrollFunction();
        }
    }));


    useEffect(() => {
        window.addEventListener('resize', resizeFunction);       
    });
    
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
            if (sb.current.getScrollTop() > 200) { showBar(navbar); }
            else { hideNavBar(navbar); }
        } 
        else {
            navbar = document.getElementById("placeholderBar")
            if (sb.current.getScrollTop() > 200) { showBar(navbar); }
            else if (!clicked) { hideDropdownBar(navbar); }
        }
    };


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
    
    return (
        (resize || window.innerWidth <= 1024) ? 
        <DropdownNavBar 
            sb={sb}
            showVideo={showVideo}
            handleShowVideo={handleShowVideo}
            clicked={clicked}
            handleClick={handleClick}
            hideDropdownBar={hideDropdownBar} 
            hideDropdownMenu={hideDropdownMenu}
            showBar={showBar}
            scrollFunction={scrollFunction}/>: 
        <LinearNavBar
            sb={sb}
            showVideo={showVideo}
            handleShowVideo={handleShowVideo}
            showBar={showBar}
            hideNavBar={hideNavBar}
            scrollFunction={scrollFunction} />
    )
}); 

export default NavBar;
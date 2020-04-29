import React, { useEffect, useState, useRef } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Socials from './Socials';
import WhatIDo from './WhatIDo';
import './index.css';

import { Scrollbars } from 'react-custom-scrollbars';
 
function Main () {
    let scrollbar = useRef();
    let navbar = useRef();

    return (
        <div className="main">
            <Scrollbars id="scrollbar" autoHide ref={e => {scrollbar.current = e;}} style={{ width: "100%", height: "100vh" }} onScroll={() => navbar.current.scroll()}>

                <NavBar ref={navbar} sb={scrollbar} />
                <div className="main_content" id="main_content">
                    <Home />
                    <div className="sub_content">
                        <AboutMe />
                        <WhatIDo />
                        <Contact />
                    </div>
                    <div className="placeholder"></div>
                    {/* <div style={{width: "100%", height: "2000px"}}></div> */}
                </div>
                <Socials />

            </Scrollbars>
        </div>
    )
    
};

export default Main; 
import React, { useEffect, useRef, lazy, Suspense, useState } from 'react';
import './CSS/index.css';
import { Scrollbars } from 'react-custom-scrollbars';

import { Initial } from './Load';
const Home = lazy(() => import('./Home'));
const NavBar = lazy(() => import('./NavBar'));
const AboutMe = lazy(() => import('./AboutMe'));
const Contact = lazy(() => import('./Contact'));
const Socials = lazy(() => import('./Socials'));
const WhatIDo = lazy(() => import('./WhatIDo'));
const Photos = lazy(() => import('./Photos'));


function Main () {
    let scrollbar = useRef();
    let navbar = useRef();

    const [showVideo, handleShowVideo] = useState(true);
    const [isMobile, handleIsMobile] = useState(window.innerWidth < 500 ? true : false);

    useEffect (() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, [])

    const handleResize = () => {
        if (window.innerWidth < 500) {
            handleIsMobile(true);
            handleShowVideo(false);
        }
        else {
            handleShowVideo(true);
            handleIsMobile(false);
        }
        setMargin();

    }

    const setMargin = () => {
        let a = document.getElementById("scrollbar");
        // let main = document.getElementById("main_content");
        let div = a.childNodes[0];
        if (a.scrollWidth - div.clientWidth != 0) {
            div.style.marginRight = Math.abs(a.scrollWidth - div.clientWidth)*-1 + "px";
        }
        
        console.log(Math.abs(a.scrollWidth - div.clientWidth)*-1 );
        // console.log(div.style.marginRight);
        // console.log(scrollbar.current.getClientWidth());
    }

    return (
        <div className="main">
            <Suspense fallback={<Initial />}>
                <NavBar ref={navbar} sb={scrollbar} showVideo={showVideo} handleShowVideo={handleShowVideo} isMobile={isMobile} />
                <Scrollbars id="scrollbar" autoHide ref={e => {scrollbar.current = e;} }  noScrollX
                    style={{ 
                        width: "100%", 
                        height: "100vh",
                        }} onScroll={() => navbar.current.scroll()}>

                    
                    <div className="main_content" id="main_content">
                        <Home showVideo={showVideo} isMobile={isMobile}/>
                        <div className="sub_content">
                            <AboutMe />
                            <WhatIDo />
                            <Photos />
                            <Contact />
                            {/* <div className="placeholder"></div>
                            <div className="placeholder"></div> */}
                        </div>
                        {/* <div style={{width: "100%", height: "2000px"}}></div> */}
                    </div>
                </Scrollbars>
                <Socials />
            </Suspense>
        </div>
    )
    
};

export default Main; 
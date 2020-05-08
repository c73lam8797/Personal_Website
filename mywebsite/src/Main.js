import React, { useRef, lazy, Suspense, useState } from 'react';
import './CSS/index.css';
import { Scrollbars } from 'react-custom-scrollbars';

import Load from './Load';
const Home = lazy(() => import('./Home'));
const NavBar = lazy(() => import('./NavBar'));
const AboutMe = lazy(() => import('./AboutMe'));
const Contact = lazy(() => import('./Contact'));
const Socials = lazy(() => import('./Socials'));
const WhatIDo = lazy(() => import('./WhatIDo'));

// const Load = lazy(() => import('./Load'));

 
function Main () {
    let scrollbar = useRef();
    let navbar = useRef();

    const [showVideo, handleShowVideo] = useState(false);

    return (
        <div className="main">
            <Suspense fallback={<Load />}>
                <NavBar ref={navbar} sb={scrollbar} showVideo={showVideo} handleShowVideo={handleShowVideo} />
                <Scrollbars id="scrollbar" autoHide ref={e => {scrollbar.current = e;}} 
                    style={{ 
                        width: "100%", 
                        height: "100vh",
                        }} onScroll={() => navbar.current.scroll()}>

                    
                    <div className="main_content" id="main_content">
                        <Home showVideo={showVideo}/>
                        <div className="sub_content">
                            <AboutMe />
                            <WhatIDo />
                            <Contact />
                            <div className="placeholder"></div>
                            <div className="placeholder"></div>
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
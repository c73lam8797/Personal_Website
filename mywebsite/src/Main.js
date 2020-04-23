import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Socials from './Socials';
import MoreAboutMe from './MoreAboutMe';
import './index.css';

class Main extends Component {
    // constructor (props){
    //     super (props);
    //     this.state = {

    //     }
    // }
    render () {
        return (
            <div className="main">
                <NavBar />
                <div className="main_content">
                    <Home />
                    <div className="sub_content">
                        <AboutMe />
                        <MoreAboutMe />
                        <Contact />
                    </div>
                    <div class="placeholder"></div>
                    {/* <div style={{width: "100%", height: "2000px"}}></div> */}
                </div>
                <Socials />
            </div>
        )
    }
};

export default Main; 
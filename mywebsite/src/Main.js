import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Socials from './Socials';
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
                <div className="stuff">
                    <Home />
                    <AboutMe />
                    <Contact />
                </div>
                <Socials />
            </div>
        )
    }
};

export default Main; 
import React from 'react';
import './index.css';
import './aboutme.css';
import pic from './profile_pic.jpg'

export default function AboutMe() {
    return (
        <div className="about" id="about"> 
            <div className="placeholder"></div>

            <h1>— ABOUT ME —</h1>
            <div id="description">
                <div id="image">        
                    <img
                        id = "profile"
                        src = {pic}
                        alt = "Profile"
                        border =  "3"
                        >
                    </img>
                </div>  
                <div id="text">
                    <p>Born Canadian and proudly Asian — my name is Charmaine and I am a Biomedical Engineering student at the University of Waterloo.</p>
                    <p>Here's some (kind of random) things about me that I would like to share with you! </p>
                    <ul>
                        <li>I love to create. Whether it's building a prototype, putting together a visual on Photoshop, or emptying my ideas out into a sketch, I challenge myself to find ways to explore my creative ability.</li>
                        <li>I have a lot of interests. Perhaps too many. Software, robotics, visual art, dance, music, gymnastics, bouldering, yoga, food(as in eating...sometimes making it too), photography, videography, hiking, canoeing, reading...you name it.</li>
                        {/* <li>I believe education is one of the most important and powerful tools.</li> */}
                        <li>I am notorius for overthinking. At least I'm aware of it...but then I overthink about how much I overthink.</li>
                        <li>My goal is to ultimately drive change through innovation and creativity.</li>
                        <li>Popcorn chicken and bubble tea. Must I say more?</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
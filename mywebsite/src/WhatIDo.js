import React, { useEffect, useState, useRef, createRef } from 'react'; 
import './index.css';
import './whatido.css';
import './whatido_slideshow.css';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';

import notes from './edited_pics/IMG_1108.jpg';
import gp from './edited_pics/IMG_1114.jpg';
import muscles from './edited_pics/IMG_1119.jpg';
import dance_vid from './274.mp4';
import dance_photo from './edited_pics/2a8a0480.jpg';
import triangle from './edited_pics/IMG_9958.JPG';
import firework from './edited_pics/IMG_7804.JPG';
import taio from './edited_pics/IMG_0347.JPG';
import flower from './edited_pics/IMG_1345.JPG';

export default function WhatIDo() {
    let [slideIndex,    changeIndex]       = useState(1);
    const [Muscles,     changeMuscles]     = useState(<img className="slide" id="1" src={muscles} alt="muscles" />);
    const [Triangle,    changeTriangle]    = useState(<img className="slide" id="2" src={triangle} alt="triangle" />);
    const [Firework,    changeFirework]    = useState(<img className="slide" id="3" src={firework} alt="firework" />);
    const [Taio,        changeTaio]        = useState(<img className="slide" id="4" src={taio} alt="taio" />);
    const [Flower,      changeFlower]      = useState(<img className="slide" id="5" src={flower} alt="flower" />);
    const [Gp,          changeGp]          = useState(<img className="slide" id="6" src={gp} alt="gp" />);
    const [Dance_vid,   changeDance_vid]   = useState(<video className="slide" id="7" src={dance_vid} controls alt="dance_vid" controlsList="nodownload" id="dance_vid" />);
    const [Dance_photo, changeDance_photo] = useState(<img className="slide" id="8" src={dance_photo} alt="dance_photo" />);
    const [Notes,       changeNotes]       = useState(<img className="slide" id="9" src={notes} alt="notes" />);
    const [prev,        changePrev]        = useState();
    const [cur,         changeCur]         = useState(<p>No image found</p>);
    const [next,        changeNext]        = useState();
    const [img_array,   changeImg_array]   = useState([Muscles, Triangle, Firework, Taio, Flower, Gp, Dance_vid, Dance_photo, Notes])
    
    useEffect( () => {
        showDivs(slideIndex);
    } )
    
    const plusDivs = (n) => {
        changeIndex(slideIndex+=n)
        showDivs(slideIndex);
    }

    const showDivs = (n) => {
        const x = img_array.length;

        let curIndex = slideIndex;
        let nextIndex = slideIndex+1; 
        let prevIndex = slideIndex-1;
        if (nextIndex >= x) {
            changeIndex(1);
            nextIndex = 1;
        }
        if (prevIndex < 0) {
            changeIndex(x-1);
            prevIndex = x-1;
        }

        changePrev(img_array[prevIndex]);
        changeCur(img_array[curIndex]);
        changeNext(img_array[nextIndex]);


        if (document.body.contains(document.getElementById("slides"))) {
            const middle = document.getElementById("cur_col")
            const x = document.getElementById("slides");
            console.log("scroll width", x.scrollWidth)
            x.scrollTo(middle.offsetLeft/2, 0);

            console.log(middle.offsetLeft);
        } 
    } 

    return (
        <div className="whatido" id="whatido">
            <div className="placeholder"></div>

            <h1>— WHAT I DO —</h1>

            <div className="table">
                <h3>Creating is My <i><span>Passion</span></i></h3>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3>Technology</h3>
                            <p>I code — I know C++, C#, Python, JS, HTML, CSS. Most of my work has involved web development (such as this site) on technologies including React, Node, Blazor Web Assembly, ASP.NET Core. I have also dabbled in ML using Tensorflow and Keras to classify Malaria cells and create a chatbot.</p>
                            <p>Currently, I am co-leading a design team to devise a Arduino based project that assists with gait retraining for people with Parkinson's disease.</p> 
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Dance</h3>
                            <p>I've danced competitvely since I was 8 years old in various genres, with a background in gymnastics. (My favourites are acrobatics and contemporary, but I would love to get more involved in hip-hop!) At 14, I competed with Team Canada, and brought home a bronze medal.</p>
                            <p>Why dance? — I dance because it has not only taught me to persevere and be resilient, but also how to express myself in a way that is unique to me. Oh and also, nothing replicates the feeling of being on stage and doing what you love.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Art + Design</h3>
                            <p>I draw, I guess. Through teaching myself, I've acquired a liking for black and white pencil sketches, but have explored with mediums such as watercolour, ink, and charcoal. Nowadays, I don't have much time to do much art, so I make my school notes visually elaborate to satisfy my desire to draw.</p>
                            <p>For leisure, I've taken up photography and photo editing, and sometimes shoot short video clips.</p>
                        </div>
                    </div>
                </div>
                <h5>Here is some art-related media of things I've done:</h5>
                <div className="slideshow">  
                    <div id="image_container">
                        <div id="slides">
                            {/* {prev}
                            {cur}
                            {next} */}
                            <div className="img_col" id="prev_col">
                                {prev}
                            </div>
                            <div className="img_col" id="cur_col">
                                {cur}
                            </div>
                            <div className="img_col" id="next_col">
                                {next}
                            </div>
                            
                        </div>
                        <div id="buttons">
                            <Button id="left_button" onClick={() => plusDivs(-1)}>&#10094;</Button>
                            <Button id="right_button" onClick={() => plusDivs(1)}>&#10095;</Button>
                        </div>

                    </div>
                </div>
                <h3>Leadership + Involvement in the <i><span>Community</span></i></h3>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3>Leadership</h3>
                            <p>An alumnus of Vision Youth Leadership Program, I now volunteer as an Outdoor Leadership Coordinator. I teach foundational survival skills, develop safety procedures and plan training schedules and multi-night expeditions to help youth work towards their Duke of Edinburgh Awards.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Teaching and Mentorship</h3>
                            <p>To me, education is one of the most powerful tools that exists.</p>
                            <p>Though I'm not any Einstein, I actively try my best to share my experiences with others. Since I was 11, I've volunteered at my dance studio and have taught kids as young as 3 and as old as 15. I'm currently also planning an initiative to help students with preparation and transitioning to post-secondary through mentorship.</p>
                            {/* <p>Occasionally, I get involved through volunteering at local barbequeues and community fairs.</p> */}
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Community Projects</h3>
                            <p>One of the more notable projects I've done is planning and organizing a coffeehouse with 3 of my peers to teach high school students methods to cope with stress. Through artistic performances, guest speakers and activities, we were able to successfully reach out to 20+ students through this project. I've also been part of the MP's Youth Constituency Council to advocate and discuss solutions to issues local in my community, such as mental health and education.</p>
                        </div>
                    </div>
                </div>
                {/* <h3>Achievements</h3> */}
                {/* <h5>Here are some things I am proud of!</h5>
                <div className="row">
                    <ul id="interests"><li id="firstpoint"><p>Testing</p></li><li><p>Testing</p></li><li><p>Testing</p></li><li><p>Testing</p></li></ul>
                </div> */}
            </div>
        </div>    
    );
};
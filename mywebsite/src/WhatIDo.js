import React, { useEffect, useState } from 'react'; 
import './index.css';
import './whatido.css';
import './whatido_slideshow.css';
import Button from '@material-ui/core/Button';

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
    const Notes       = <img   className="slide" id="0" src={notes}      alt="notes" />
    const Muscles     = <img   className="slide" id="1" src={muscles}    alt="muscles" />          
    const Triangle    = <img   className="slide" id="2" src={triangle}   alt="triangle" />      
    const Firework    = <img   className="slide" id="3" src={firework}   alt="firework" />
    const Taio        = <img   className="slide" id="4" src={taio}       alt="taio" />
    const Flower      = <img   className="slide" id="5" src={flower}     alt="flower" />
    const Gp          = <img   className="slide" id="6" src={gp}         alt="gp" />
    const Dance_vid   = <video className="slide" id="7" src={dance_vid}  alt="dance_vid" controls controlsList="nodownload" />
    const Dance_photo = <img   className="slide" id="8" src={dance_photo}alt="dance_photo" />
   
    //this has to be a state because it bugs out otherwise :)
    const [img_array,   changeImg_array]   = useState([Notes, Muscles, Triangle, Firework, Taio, Flower, Gp, Dance_vid, Dance_photo])
    
    useEffect( () => {
        showDivs(0);
        window.addEventListener('resize', scroll);
    })
    

    const scroll = () => {
        if (document.body.contains(document.getElementById("slides"))) {
            const previous = document.getElementById("prev_col");
            const middle = document.getElementById("cur_col");
            const x = document.getElementById("slides");


            let a = x.offsetWidth-previous.offsetWidth; //subtract viewing width - width of first col. 
            let b = Math.abs(middle.offsetWidth - a); //this is the amount the middle image shown w/o scrolling and how much you should scroll to see the middle image on the right
            let c = previous.offsetWidth; //the amount to scroll to scrollpast the prev col and show the middle image on the left

            
            x.scrollTo ( (b+c)/2, 0);

            // console.log("scroll width", x.scrollWidth) //length of how much the scroll is
        } 
    }

    const showDivs = (plus) => {
        const x = img_array.length;

        let all_img = document.getElementById("slides");
        //if we move forwards, append the first element at the end
        if (plus === (1)) { console.log("move forward"); all_img.appendChild(document.getElementById("first")); }

        //if we move backwards, append the last element at the beginning
        if (plus === (-1)) { console.log("move backward"); all_img.insertBefore(document.getElementById("last"), all_img.childNodes[0]); }


        let prevIndex = 1;
        let curIndex = 2;
        let nextIndex = 3; 

        let cols = document.getElementsByClassName("img_col");

        for (let i =0; i<cols.length; i++) {
            //add buffer to everything and remove all ids before continuing
            if (!cols[i].classList.contains("buffer")) {
                cols[i].removeAttribute("id");
                cols[i].classList.add("buffer");
            }
            //remove buffer, add ids, and fix display for corresponding indices 
            if (i===prevIndex || i===curIndex || i===nextIndex) {
                cols[i].classList.remove("buffer");
                cols[i].style.display = "flex";
                if (i===prevIndex) { cols[i].id="prev_col"; }
                if (i===curIndex)  { cols[i].id="cur_col";  }
                if (i===nextIndex) { cols[i].id="next_col"; } 
            }

            //finally modify display of buffer cols
            if (cols[i].classList.contains("buffer")) {
                cols[i].style.display = "none";
                cols[i].removeAttribute("id");
            }

            if (i===0) { cols[i].id = "first"; }
            if (i===x-1) {cols[i].id = "last"; }
        }

        scroll();
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
                            <div className="img_col buffer">
                                {img_array[0]}
                            </div>
                            <div className="img_col" id="prev_col">
                                {img_array[1]}
                            </div>
                            <div className="img_col" id="cur_col">
                                {img_array[2]}
                            </div>
                            <div className="img_col" id="next_col">
                                {img_array[3]}
                            </div>
                            <div className="img_col buffer">
                                {img_array[4]}
                            </div>
                            <div className="img_col buffer">
                                {img_array[5]}
                            </div>
                            <div className="img_col buffer">
                                {img_array[6]}
                            </div>
                            <div className="img_col buffer">
                                {img_array[7]}
                            </div>
                            <div className="img_col buffer">
                                {img_array[8]}
                            </div>
                        </div>
                        <div id="buttons">
                            <Button id="left_button" onClick={() => showDivs(-1)}>&#10094;</Button>
                            <Button id="right_button" onClick={() => showDivs(1)}>&#10095;</Button>
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
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Community Projects</h3>
                            <p>One of the more notable projects I've done is planning and organizing a coffeehouse with 3 of my peers to teach high school students methods to cope with stress. Through artistic performances, guest speakers and activities, we were able to successfully reach out to 20+ students through this project. I've also been part of the MP's Youth Constituency Council to advocate and discuss solutions to issues local in my community, such as mental health and education.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};
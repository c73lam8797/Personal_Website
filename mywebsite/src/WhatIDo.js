import React from 'react'; 
import Card from './Card';
import './CSS/index.css';
import './CSS/whatido.css';



export default function WhatIDo() {
    const tech = {
        header: "Technology",
        body: [
            "I code — I know C++, C#, Python, JS, HTML, CSS. Most of my work has involved web development (such as this site) on technologies including React, Node, Blazor Web Assembly, ASP.NET Core. I have also dabbled in ML using Tensorflow and Keras to classify Malaria cells and create a chatbot.",
            "Currently, I am co-leading a design team to devise a Arduino based project that assists with gait retraining for people with Parkinson's disease."
        ]
    }
    const dance = {
        header: "Dance",
        body: [
            "I've danced competitvely since I was 8 years old in various genres, with a background in gymnastics. (My favourites are acrobatics and contemporary, but I would love to get more involved in hip-hop!) At 14, I competed with Team Canada, and brought home a bronze medal.",
            "Why dance? — I dance because it has not only taught me to persevere and be resilient, but also how to express myself in a way that is unique to me. Oh and also, nothing replicates the feeling of being on stage and doing what you love."
        ]
    }
    const art_design = {
        header: "Art + Design",
        body: [
            "I draw, I guess. Through teaching myself, I've acquired a liking for black and white pencil sketches, but have explored with mediums such as watercolour, ink, and charcoal. Nowadays, I don't have much time to do much art, so I make my school notes visually elaborate to satisfy my desire to draw.",
            "For leisure, I've taken up photography and photo editing, and sometimes shoot short video clips."
        ]
    }
    const row1 = [tech, dance, art_design];

    const leadership = {
        header: "Leadership",
        body: [
            "An alumnus of Vision Youth Leadership Program, I now volunteer as an Outdoor Leadership Coordinator. I teach foundational survival skills, develop safety procedures and plan training schedules and multi-night expeditions to help youth work towards their Duke of Edinburgh Awards."
        ]
    }
    const teaching = {
        header: "Teaching and Mentorship",
        body: [
            "To me, education is one of the most powerful tools that exists.",
            "Though I'm not any Einstein, I actively try my best to share my experiences with others. Since I was 11, I've volunteered at my dance studio and have taught kids as young as 3 and as old as 15. I'm currently also planning an initiative to help students with preparation and transitioning to post-secondary through mentorship."
        ]
    }
    const projects = {
        header: "Community Projects",
        body: [
            "One of the more notable projects I've done is planning and organizing a coffeehouse with 3 of my peers to teach high school students methods to cope with stress. Through artistic performances, guest speakers and activities, we were able to successfully reach out to 20+ students through this project. I've also been part of the MP's Youth Constituency Council to advocate and discuss solutions to issues local in my community, such as mental health and education."
        ]
    }
    const row2 = [leadership, teaching, projects];

    return (
        <div className="whatido" id="whatido">
            <div className="placeholder"></div>

            <h1>— WHAT I DO —</h1>

            <div className="table">
                <h3>Creating is My <i><span>Passion</span></i></h3>
                <div className="row">
                    {row1.map((card,index) => {
                        return (
                            <Card header={card.header} body={card.body} />
                        )
                    })}
                </div>

                <h3>Leadership + Involvement in the <i><span>Community</span></i></h3>
                <div className="row">
                    {row2.map((card,index) => {
                        return (
                            <Card header={card.header} body={card.body} />
                        )
                    })}
                </div>
            </div>
        </div>    
    );
};
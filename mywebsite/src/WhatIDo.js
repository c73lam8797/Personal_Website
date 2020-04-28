import React from 'react'; 
import './index.css'
import './whatido.css';

export default function WhatIDo() {
    return (
        <div className="whatido" id="whatido">
            <div className="placeholder"></div>

            <h1>— WHAT I DO —</h1>

            <div className="table">
                <h3>Creating is My <i><span>Passion</span></i></h3>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h4>Technology</h4>
                            <p>Technology</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h4>Dance</h4>
                            <p>Dance</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h4>Art + Design</h4>
                            <p>Art + Design</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 4</p>
                        </div>
                    </div>
                </div>
                <h3>Giving Back to the <i><span>Community</span></i></h3>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h4>Leadership</h4>
                            <p>Leadership rctfgvhjbnkmnhugfahwfiujfaufbwabowaljfwytrf</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h4>Volunteering and Teaching</h4>
                            <p>Volunteering and Teaching</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h4>Project Planning</h4>
                            <p>Project Planning</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 4</p>
                        </div>
                    </div>
                </div>
                <h3>Achievements</h3>
                <h5>Here are some things I am proud of!</h5>
                <div className="row">
                    <ul id="interests"><li id="firstpoint"><p>Testing</p></li><li><p>Testing</p></li><li><p>Testing</p></li><li><p>Testing</p></li></ul>
                </div>
            </div>
        </div>    
    );
};
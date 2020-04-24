import React from 'react'; 
import './index.css'
import './whatido.css';

export default function WhatIDo() {
    return (
        <div className="moreaboutme" id="whatido">
            <div className="placeholder"></div>

            <h1>— WHAT I DO —</h1>

            <div className="table">
                <h3>Creating is My <i><span>Passion</span></i></h3>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <p>Dance</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 2</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 3</p>
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
                            <p>Leadership</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 2</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 3</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <p>Card 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};
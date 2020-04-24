import React from 'react'; 
import './index.css'
import './whatido.css';

export default function WhatIDo() {
    return (
        <div className="moreaboutme" id="whatido">
            <div className="placeholder"></div>

            <h1>— WHAT I DO —</h1>

            <div className="table">
                <h3><i>Creating is My <span>Passion</span></i></h3>
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
                <h3><i>Giving Back to the <span>Community</span></i></h3>
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
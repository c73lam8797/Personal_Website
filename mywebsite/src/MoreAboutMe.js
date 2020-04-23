import React from 'react'; 
import './index.css'
import './whatido.css';

export default function MoreAboutMe() {
    return (
        <div class="moreaboutme" id="whatido">
            <div class="placeholder"></div>

            <h1>— WHAT I DO —</h1>

            <div class="table">
                <h3>Creating is My <span>PASSION</span></h3>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <p>Card 1</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Card 2</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Card 3</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Card 4</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <div class="card">
                            <p>Card 1</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Card 2</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Card 3</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Card 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};
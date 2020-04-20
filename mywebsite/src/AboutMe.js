import React from 'react';
import './index.css';
import pic from './profile_pic.jpg'

export default function AboutMe() {
    return (
        <div className="about" id="about"> 
            <div style={{width: "100%", height: "62px"}}></div>
            <h1 style={{marginTop: "0px"}}>About Me</h1>
            <div>
                <p style = {{
                    position: "relative", 
                    display: "inline-block",
                    // padding: "01px",
                    // marginLeft: "10px",
                    // margin: "20px",
                }}>

                    <img
                        src = {pic}
                        alt = "Profile"
                        border =  "3"
                        style = {{
                            // position: "absolute",
                            width: "450px",
                            visibility: "visible",
                            float: "left",
                            marginRight: "20px",
                        }}
                    >
                    </img>

                    Insert Something Here
                </p>
            </div>
        </div>
    )
}
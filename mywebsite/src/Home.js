import React from 'react';
import video from './Media/2160p.mp4';
import alt_background from './Media/IMG_1481.jpg'
import './CSS/index.css';
import './CSS/home.css';


export default function Home(props) {
  return (
    <div className="home" id="home">
      {props.showVideo? 
      <video
          id="main_vid"
          autoPlay
          muted
          loop
          controls={false}
          src = {video}
          playsInline
          >          
      </video>
      :
      <img 
        id="main_vid"
        autoPlay
        muted
        loop
        src = {alt_background}
        alt = "background"
        >  
        </img>
      } 
      <div id="content">
          <h1>Charmaine Lam</h1>
          <h3>A little bit about my story</h3>
      </div>
    </div>
  );
};
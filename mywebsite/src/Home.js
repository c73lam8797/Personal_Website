import React, { useEffect } from 'react';
import video from './Media/2160p.mp4';
import alt_background from './Media/IMG_1481.jpg'
import './CSS/index.css';
import './CSS/home.css';


export default function Home({showVideo, isMobile}) {
  return (
    <div className="home_overlay" id="home_overlay">
      {showVideo? 
      <video
          className = "main_media"
          id="main_vid"
          autoPlay
          muted
          loop
          controls={false}
          src = {video}
          playsInline
          >          
      </video>
      : null }
        <img 
        className = "main_media"
        id="main_image"
        src = {alt_background}
        alt = "background"
        >  
        </img>
    <div className="home" id="home">
      <div id="content">
          <h1>Charmaine Lam</h1>
          <h3>—  A little bit about my story —</h3>
      </div>
    </div>
    </div>
  );
};
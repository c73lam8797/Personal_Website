import React, { useEffect } from 'react';
import video from './Media/2160p.mp4';
import alt_background from './Media/IMG_1481.jpg'
import './CSS/index.css';
import './CSS/home.css';


export default function Home({showVideo, isMobile}) {
  // useEffect (()=> {
  //   setDimensions();
  //   // if (showVideo) {
  //   //     document.getElementById("main_image").style.visibility = "hidden";
  //   // }
  //   // else {
  //   //   document.getElementById("main_image").style.visibility = "visible";
  //   // }
  // })

  // useEffect(()=> {
  //   window.addEventListener('resize', setDimensions);
  // }, [])

  // const setDimensions = () => {
  //   const media = Array.from(document.getElementsByClassName("main_media"));
  //   media.forEach(m => {
  //       // if (!isMobile) {
  //         m.style.height = "100%";  
  //         m.style.width = "auto";
  
  //         if (m.clientWidth < window.innerWidth) {
  //           m.style.width = "100%";
  //           m.style.height = "auto";
  //         }
  //   })
  // }
  // setDimensions();

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
          // onLoad={setDimensions}
          >          
      </video>
      : null }
    <div className="home" id="home">
      {/* <img 
        className = "main_media"
        id="main_image"
        autoPlay
        muted
        loop
        src = {alt_background}
        alt = "background"
        onLoad={setDimensions}
        >  
        </img> */}
      <div id="content">
          <h1>Charmaine Lam</h1>
          <h3>—  A little bit about my story —</h3>
      </div>
    </div>
    </div>
  );
};
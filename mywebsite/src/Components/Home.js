import React, { useEffect } from 'react';
import video from '../Media/2160p.mp4';
import alt_background from '../Media/IMG_7078-Edit.jpg'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import ScrollAnimation from 'react-animate-on-scroll';
import '../CSS/index.css';

export function _Home({id, showVideo, isMobile, scrollbar, backgroundColor, setBackgroundColor, curPanel, setFontColor}) {
  // useEffect(()=> {
  //   document.getElementById("main_image").style.visibility = "hidden";
  // }, [])

  // useEffect(()=> {
  //   setVisibility();
  // })

  // const setVisibility = (e) => {
  //   if (!showVideo) {
  //     document.getElementById("main_image").style.visibility = "visible";
  //   }
  // }

  useEffect(() => {
    if (curPanel === id) {
      setBackgroundColor(backgroundColor);
      setFontColor("white");
    }
  },[curPanel])

  return (
    <Container fluid id={id} style={{height: '100vh', margin: '0px', padding: '0px', position: 'relative'}} className="page_section">
      <div id="home_overlay" style={{objectFit: 'cover', width: '100%', height: '100%', backgroundColor: "rgba(65, 73, 74, 0.6)", zIndex: '1', position: 'absolute', top:'0px'}} />
      {!isMobile? 
      <video
          style={{objectFit: 'cover', width: '100%', height: '100%'}}
          autoPlay
          muted
          loop
          controls={false}
          src = {video}
          playsInline
          >      
      </video>
      : <img 
        id="main_image"
        style={{objectFit: 'cover', width: '100%', height: '100%'}}
        src = {alt_background}  
        alt = ""
        // onLoad = {setVisibility}
        >  
        </img>}
        <div style={{position: 'absolute', zIndex: 2, top: '50%', left: '50%', transform: "translate(-50%, -50%)"}}>
          <ScrollAnimation animateIn='animate__zoomIn' animateOnce>
            <Row className="justify-content-center"><h1 style={{textAlign: 'center'}}>Charmaine Lam</h1></Row>
            <Row className="justify-content-center"><h3><span>—</span></h3><h3 style={{textAlign: 'center', margin: "0px 10px"}}>A little bit about my story</h3><h3><span>—</span></h3></Row>      
          </ScrollAnimation>
        </div>
    </Container>
  );
};
import React, { useEffect, useRef, useState } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import Button from '@material-ui/core/Button';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import { Row, Col } from 'react-bootstrap';
import * as Components from './Components';
import './CSS/index.css';
const Header = Layout.Header;
const Content = Layout.Content;
const layoutStyles = {margin:'0px', padding: '0px'};
function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [curPanel, setCurPanel] = useState(""); 
  
  let scrollbar = useRef();
  
  useEffect(() => {
    window.addEventListener('resize', resizeFunction);
    window.addEventListener('scroll', scrollFunction);

    scrollFunction();
  },[])

  useEffect(() => {
    document.getElementById('content').style.backgroundColor = backgroundColor;
  }, [backgroundColor])

  useEffect(() => {
    document.getElementById('content').style.color = fontColor;
    // console.log(document.getElementById('content').style.color)
    // console.log(fontColor)
  },[fontColor])

  // useEffect(() => {
  //   console.log(curPanel)
  // },[curPanel])

  const scrollFunction = () => {
    const scrollPosition = document.body.scrollTop;
    const checkPosition = scrollPosition + window.innerHeight/3;
    const sections = Array.from(document.getElementsByClassName("page_section"));
    const panel = sections.find(e => {
      const rect = e.getBoundingClientRect();
      const elementTop = rect.top + scrollPosition;
      return (elementTop <= checkPosition && elementTop + e.scrollHeight > checkPosition) 
    });
    setCurPanel(panel !== undefined && panel !== null ? panel.id : "");
  }
  
  const resizeFunction = () => {
    setIsMobile(window.innerWidth <= 1024);
    // setMargin();
  }

  //+ +const setMargin = () => {
  //   let a = document.getElementById("scrollbar");
  //   let div = a.childNodes[0];
  //   if (a.scrollWidth - div.clientWidth !== 0) {
  //     div.style.marginRight = Math.abs(a.scrollWidth - div.clientWidth)*-1 + "px";
  //   }
  // }

  const scrollUp = () => {
    // scrollbar.current.scrollToTop();
    window.scrollTo(0,0);
  }
  
  return (
    // <div className="main" /*style={{height: '100vh'}}*/>
      <>
        <Header id="header">
          <Components._Navbar isMobile={isMobile} curPanel={curPanel}/>
        </Header>
        <Content id="content">
          <Row style={layoutStyles}>
            <Col style={layoutStyles}>
              <Components._Home id="home" showVideo={true} isMobile={isMobile} scrollbar={scrollbar} backgroundColor="rgb(65, 73, 74)" setBackgroundColor={setBackgroundColor} setFontColor={setFontColor} curPanel={curPanel}/>
            </Col>
          </Row>
          <Row style={layoutStyles}>
            <Col style={layoutStyles}>
              <Components._AboutMe id="about" isMobile={isMobile} scrollbar={scrollbar} backgroundColor = "rgb(131, 83, 83)" setBackgroundColor={setBackgroundColor} setFontColor={setFontColor} curPanel={curPanel}/>
            </Col>
          </Row>
          <Row style={layoutStyles}>
            <Col style={layoutStyles}>
              <Components._WhatIDo id="whatido" isMobile={isMobile} scrollbar={scrollbar} backgroundColor="" setBackgroundColor={setBackgroundColor} setFontColor={setFontColor} curPanel={curPanel}/>
            </Col>
          </Row>
          <Row style={layoutStyles}>
            <Col style={layoutStyles}>
              <Components._Photos id="photos" isMobile={isMobile} scrollbar={scrollbar} backgroundColor = "#4b3e46" setBackgroundColor={setBackgroundColor} setFontColor={setFontColor} curPanel={curPanel}/>
            </Col>
          </Row>
          <Row style={layoutStyles}>
            <Col style={layoutStyles}>
              <Components._Contact id="contact" isMobile={isMobile} scrollbar={scrollbar} backgroundColor = "#868194" setBackgroundColor={setBackgroundColor} setFontColor={setFontColor} curPanel={curPanel}/>
            </Col>
          </Row>
        </Content>
        {curPanel !== 'home' ? <Button id="scrollTop" onClick={scrollUp} classes={{label: 'label'}}><FontAwesomeIcon icon={faAngleUp} /></Button> : null}
      </>
      
  );
}

export default Main; 
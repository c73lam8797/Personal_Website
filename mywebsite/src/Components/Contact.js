import React, { useEffect, useState } from 'react';
import pdf from '../Media/Charmaine_Lam_Resume.pdf'
import Button from '@material-ui/core/Button';
import { Toast } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as Helper from './Helpers';
import '../CSS/_contact.css';

const color = "#f7ba8e";
const layoutStyles = {marginTop:'0px', marginLeft:'0px', marginRight:'0px', marginBottom:'0px', padding: '0px'};
const buttonStyles = {color: 'white', border: color + ' solid 2px', outline: 'none'};
export function _Contact({ id, isMobile, scrollbar, backgroundColor, setBackgroundColor, curPanel, setFontColor }) {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const icons = document.getElementsByClassName("contact_buttons");
    Array.from(icons).forEach(icon => {
      icon.addEventListener('click', handleTouch, { passive: true });
    })
  }, []);

  useEffect(() => {
    if (curPanel === id) {
      setBackgroundColor(backgroundColor);
      setFontColor("white");
    }
	},[curPanel])

  const handleTouch = (e) => {
    let icon = e.target;
    if (!icon.classList.contains("contact_buttons")) { icon = e.target.parentElement; }
    icon.style.backgroundColor = color;
    setTimeout(() => icon.style.backgroundColor = "transparent", 2000);
  };


  const copyEmail = (e) => {
    let temp = document.createElement("input")
    temp.setAttribute("type", "text");
    temp.setAttribute("value", document.getElementById("email").value);
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    setEmailCopied(true);
    document.body.removeChild(temp);
  }

  return (
    <Container fluid id={id} style={{padding: isMobile ?  '10px 10px 60px 10px' : '10px 10% 60px 10%', minHeight: '100vh'}} className="page_section">
      <Helper.SectionHeader title="CONTACT" />
      <Helper.SectionSubtitle subtitle="Let's Connect!"/>
      <Helper.SectionSubtitle subtitle="I am always looking to create new connections, whether it's for a bubble tea (or coffee) chat or an opportunity to collaborate." />
      <Helper.SectionSubtitle subtitle="I am best reached through email or a message on LinkedIn." />
      <Row className="justify-content-center" style={layoutStyles}>
        <p>Click below to copy my email!</p>
      </Row>
      <Row className="justify-content-center" style={{...layoutStyles, marginBottom: '10px'}}>
        <Button id="email" value="c73lam@uwaterloo.ca" onClick={copyEmail} style={buttonStyles} classes={{root: 'contact_buttons'}}>c73lam@uwaterloo.ca</Button>
      </Row>
      <Row className="justify-content-center" style={{...layoutStyles, marginBottom: '10px'}}>
        <a id="resume_a" href={pdf} target="_blank" rel="noopener noreferrer">
          <Button id="resume" style={buttonStyles} classes={{root: 'contact_buttons'}}>Download Resume</Button>
        </a>
      </Row>
      <Row className="justify-content-center" style={layoutStyles}>
        <Toast style={{ color: "black", background: "white", borderRadius: "3px" }} show={emailCopied} onClose={() => setEmailCopied(false)} delay={2000} animation autohide>
          Email Successfully Copied!
        </Toast>
      </Row>
      <Row className="justify-content-center" style={{...layoutStyles, marginTop: '50px'}}>
        <a style={{margin: '10px'}} target="_blank" rel="noopener noreferrer" href = "https://www.github.com/c73lam8797"><FontAwesomeIcon id="github" icon={faGithub} size="4x" /></a>
        <a style={{margin: '10px'}} target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/lam-charmaine/"><FontAwesomeIcon id="linkedin" icon={faLinkedin} size="4x" /></a>
      </Row>
      <Row className="justify-content-center" style={{marginRight: '0px', marginLeft: '0px'}} id="design_remark">
        <small>Built and designed by Charmaine Lam.</small>
      </Row>
    </Container>
  )
}
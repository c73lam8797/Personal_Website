import React, { useEffect, useState } from 'react';
// import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeartbeat, faPalette, faCompass, /* faProjectDiagram, */ faUsers } from '@fortawesome/free-solid-svg-icons';
import { CardSection } from './CardSection';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import * as Helper from '../Helpers'; 
import '../../CSS/_whatido.css';

const layoutStyles = {margin:'0px', padding: '0px'};
// const verticalAlign = {...layoutStyles, position: 'relative', top: '50%', transform: 'translateY(-50%)', marginBottom: '15px'};
const iconStyles = {position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'};
function Section({ header = "", id="", front = null, back = [""], _fontColor="", _backgroundColor="", _fontColorFlipped="", _backgroundColorFlipped="" }) {
  const _header = (
    <Row className="justify-content-center" style={layoutStyles}><h1 style={{textAlign: 'center', color: 'inherit'}} className="card_section_title">{header}</h1></Row>);

  const _front = ( 
    front
  );

  const _back = (
    <Row style={layoutStyles}>
      {back.map((x, i) => {
        return (
          <Row className="justify-content-center" key={i} style={{...layoutStyles, width: '100%'}}>
            <Col style={{...layoutStyles, textAlign: 'center'}}>
              <p style={{color: 'inherit'}}>{x}</p>
            </Col>
          </Row>
        )
      })}
    </Row>);

  return { header: _header, id: id, front: _front, back: _back, fontColor: _fontColor, backgroundColor: _backgroundColor, fontColorFlipped: _fontColorFlipped, backgroundColorFlipped: _backgroundColorFlipped }
}


  const tech = Section({
    header: "Technology",
    id: "technology",
    front: <FontAwesomeIcon style={iconStyles} className="card_face" icon={faCode} size="5x" />,
    back: [
      "I code — I know C++, C#, Python, TypeScript, JavaScript, HTML, CSS. So far, I have done most on my work on technologies such as React, LINQ, Node, Blazor Web Assembly, ASP.NET Core, SQL Server, and Entity Framework with a focus in web development. I have also used Tensorflow to dabble in machine learning - some of the things I've worked on include: experimenting with different sequence to sequence models to build a chatbot and using image classification to recognize cells infected with Malaria.",
      "Currently, I am co-leading an engineering design team to devise an Arduino based project that assists with gait retraining for people with Parkinson's disease."
    ],
    _fontColor: "#667292",
    _backgroundColor: "#f1e3dd",
    _fontColorFlipped: "#36486b",
    _backgroundColorFlipped: "#daebe8",
  })

  const dance = Section({
    header: "Dance",
    id: "dance",
    front: <FontAwesomeIcon style={iconStyles} className="card_face" icon={faHeartbeat} size="5x"/>,
    back: [
      "I've danced competitively since I was 8 years old in various genres. My favourite styles are acrobatics and contemporary (although I would love to get into hip-hop). At 14, I competed with Team Canada at the World Championships in Germany, and brought home a bronze medal.",
      "Why dance? — I dance because it has not only taught me to persevere and be resilient, but also how to tell stories and express myself in a way that is unique to me. Oh and also, nothing replicates the feeling of being on stage and doing what you love."
    ],
    _backgroundColor: "#FDDFDF",
    _fontColor: "#4d3675",
    _fontColorFlipped: "#276670",
    _backgroundColorFlipped: "#aedee6", 
  })

  const art_design = Section({
    header: "Art + Design",
    id: "artdesign",
    front: <FontAwesomeIcon style={iconStyles} className="card_face" icon={faPalette} size="5x"/>,
    back: [
      "I draw, I guess. Though I've acquired a liking for black and white pencil sketches, I have explored with mediums such as watercolour, ink, and charcoal. Nowadays, I don't have much time to do much art, so I make my school notes visually elaborate to satisfy my desire to draw.",
      "For leisure, I've taken up photography and photo editing, and sometimes shoot short video clips.",
      "Fun fact: I'm self taught in both!"
    ], 
    _backgroundColor: "#ffe7a6",
    _fontColor: "#4f1e00",
    _fontColorFlipped: "#19423b",
    _backgroundColorFlipped: "#c9f5e2", 
  })

  const row1 = [tech, dance, art_design];

  const leadership = Section({
    header: "Leadership",
    id: "leadership",
    front: <FontAwesomeIcon style={iconStyles} className="card_face" icon={faCompass} size="5x"/>,
    back: [
      "An alumnus of Vision Youth Leadership Program, I now give back to the program by volunteering as an Outdoor Leadership Coordinator. The work I do not only helps youth work towards their Duke of Edinburgh Awards, but emphasizes leadership development in an outdoor environment - I teach foundational survival skills, develop safety procedures, plan training schedules and lead multi-night expeditions."
    ],
    _backgroundColor: "#a7b1cf",
    _fontColor: "#323b57",
    _fontColorFlipped: "#315940",
    _backgroundColorFlipped: "#9dccae",
  })

  const teaching = Section({
    header: "Teaching and Volunteering",
    id: "teachingvolunteering",
    front: <FontAwesomeIcon style={iconStyles} className="card_face" icon={faUsers} size="5x"/>,
    back: [
      // "To me, education is one of the most powerful tools that exists.",
      /* "Though I'm not any Einstein, I actively try my best to share my experiences with others.  */"Since I was 11, I've volunteered at my dance studio and have taught kids as young as 3 and as old as 15.",
      "Another project I've worked on includes planning a coffeehouse with 3 of my peers to teach high school students methods to cope with stress, where through artistic performances, guest speakers and activities, we were able to successfully reach out to 20+ students through this project. I've also been part of the MP's Youth Constituency Council to advocate and discuss solutions to issues local in my community, such as mental health and education."
    ],
    _backgroundColor: "#ebd4ff",
    _fontColor: "#3e1463",
    _fontColorFlipped: "#73380a",
    _backgroundColorFlipped: "#fff2d4",
  })

  // const projects = Section({
  //   header: "Community Projects",
  //   id: "communityprojects",
  //   front: <FontAwesomeIcon style={iconStyles} className="card_face" icon={faProjectDiagram} size="5x"/>,
  //   back: [
  //     "One of the more notable projects I've done is planning and organizing a coffeehouse with 3 of my peers to teach high school students methods to cope with stress. Through artistic performances, guest speakers and activities, we were able to successfully reach out to 20+ students through this project. I've also been part of the MP's Youth Constituency Council to advocate and discuss solutions to issues local in my community, such as mental health and education."
  //   ], 
  //   _backgroundColor: "",
  //   _fontColor: "",
  //   _fontColorFlipped: "",
  //   _backgroundColorFlipped: "",
  // })

  const row2 = [leadership, teaching, /* projects */];


export function _WhatIDo({ id, isMobile, scrollbar, backgroundColor, setBackgroundColor, curPanel, setFontColor }) {
  const [curSection, setCurSection] = useState("");
  useEffect(() => {
    window.addEventListener('scroll', handleColorChange);
    return (() => {
      window.removeEventListener('scroll', handleColorChange);
    })
  })
  useEffect(() => {
    handleColorChange();
  },[curPanel])
  const handleColorChange = () => {
    if (curPanel === id) {
      const sections = Array.from(document.getElementsByClassName("card_section"));
      const scrollPosition = document.body.scrollTop;
      const checkPosition = scrollPosition + window.innerHeight/3;
      let curSection = sections.find(e => {
        const rect = e.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        return (elementTop <= checkPosition && elementTop + e.scrollHeight > checkPosition) 
      });
      setCurSection(curSection !== undefined && curSection !== null ? curSection.id : "");
    }
    else {
      setCurSection("");
    }
  }
  // useEffect(() => {
  //   console.log(curSection)
  // },[curSection])

  return (
    <Container fluid id={id} style={{padding: '10px 0px 0px 0px'}} className="page_section">
      <Helper.SectionHeader title="WHAT I DO" />
      <Helper.SectionSubtitle subtitle="Flip the cards to learn more!"/>
      <Row style={layoutStyles}>
        <Col style={layoutStyles}>
          {row1.map((x,i) => {
            return (
              <CardSection key={i} cardSection={x}
                isMobile={isMobile} setBackgroundColor={setBackgroundColor} curSection={curSection} setFontColor={setFontColor}
                sectionSubtitle={<h6 style={{textAlign: 'center'}} className="section_title section_title_top">Creating is My <span className="section_title section_title_bottom">PASSION</span></h6>}
              />
            )
          })}
           {row2.map((x,i) => {
            return (
              <CardSection key={i} cardSection={x}
                isMobile={isMobile} setBackgroundColor={setBackgroundColor} curSection={curSection} setFontColor={setFontColor}
                sectionSubtitle={<h6 style={{textAlign: 'center'}} className="section_title section_title_top">Leadership + Involvement in the <span className="section_title section_title_bottom">COMMUNITY</span></h6>}
              />
            )
          })}
        </Col>
      </Row>
    </Container>

  )
};
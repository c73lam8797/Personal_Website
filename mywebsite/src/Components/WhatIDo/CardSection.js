import React, { useEffect, useState } from 'react'; 
// import { FlipCard } from './FlipCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Row, Col } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import { Card} from './Card';

const layoutStyles = {margin: '0px', padding: '0px'};
const verticalAlign = {...layoutStyles, position: 'relative', top: '50%', transform: 'translateY(-50%)'};

export function CardSection({sectionSubtitle, cardSection, isMobile, setBackgroundColor, curSection="", setFontColor}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const {front, back, id, header, backgroundColor, backgroundColorFlipped, fontColor, fontColorFlipped} = cardSection;

  useEffect(() => {
    Array.from(document.getElementById(id).getElementsByClassName('card')).forEach(x => {
      x.addEventListener('click', clickFunction);
    })
    return (() => {
      Array.from(document.getElementById(id).getElementsByClassName('card')).forEach(x => {
        x.removeEventListener('click', clickFunction);
      })
    })
  },[isMobile])

  const clickFunction = () => {
    // console.log(isFlipped)
    setIsFlipped(prev => {
      // console.log(prev)
      if (prev) return false;
      return true;
    });
  }

  useEffect(() => {
    if (curSection === id) {
      setBackgroundColor(backgroundColor)
      setFontColor(fontColor);
    }
  },[curSection])

  const cardStyles = {...layoutStyles, color: (isFlipped ? fontColorFlipped : fontColor)};
  return (
    <Jumbotron className="card_section" id={id} fluid style={{height: '100vh', maxHeight: '100vh', margin: '0px', backgroundColor: (isFlipped ? backgroundColorFlipped : "transparent") }}>
      {isMobile ?
      <>
        <Row className="justify-content-center" style={{...layoutStyles}}> 
          <Col style={{...layoutStyles}}>
            <Row className="justify-content-center" style={{...layoutStyles}}>{sectionSubtitle}</Row> 
            <Row className="justify-content-center" style={{...layoutStyles, color: (isFlipped ? fontColorFlipped : fontColor)}}>{header}</Row>
            {/* <Row className="justify-content-center" style={layoutStyles}><Switch size="small" checked={isFlipped} onChange={e => setIsFlipped(e.target.checked)} /></Row> */}
          </Col>
        </Row>
        <Row className="flip_row justify-content-center" style={{...layoutStyles, position: (!isMobile ? 'relative' : ''), top: (!isMobile ? '50%' : ''), transform: (!isMobile ? 'translateY(-50%)' : '' )}}>
          <Col style={cardStyles} className={`column ${isFlipped ? 'col_active' : ""}`}> 
            <Card content={front} type="front"/> 
            <Card content={back} type="back"/>
          </Col>
        </Row>        
      </>
      :
      <Row className="justify-content-center" style={{...layoutStyles, height: '100%'}}> 
        <Col style={{...layoutStyles}}>
          <Row className="justify-content-center" style={{...verticalAlign, margin: '0px 0px 15px 0px'}}>{sectionSubtitle}</Row> 
          <Row className="justify-content-center" style={{...verticalAlign, color: (isFlipped ? fontColorFlipped : fontColor)}}>{header}</Row>
          <Row className="justify-content-center" style={verticalAlign}><Switch size="small" checked={isFlipped} onChange={e => setIsFlipped(e.target.checked)} /></Row>
        </Col>
        <Col style={{...layoutStyles}}>
          <Row className="flip_row justify-content-center" style={{...layoutStyles, position: (!isMobile ? 'relative' : ''), top: (!isMobile ? '50%' : ''), transform: (!isMobile ? 'translateY(-50%)' : '' )}}>
            <Col style={cardStyles} className={`column ${isFlipped ? 'col_active' : ""}`}> 
              <Card content={front} type="front"/> 
              <Card content={back} type="back"/>
            </Col>
          </Row>
        </Col>
      </Row> }
    </Jumbotron>
  )
}
import React, { useEffect, useState } from 'react';
import * as Helper from '../Helpers';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
// import Gallery from 'react-grid-gallery';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Swiper from 'react-id-swiper';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow, Lazy } from 'swiper';
import Lightbox from 'react-image-lightbox';
import LazyLoad from 'react-lazyload';
import '../../CSS/_photos.css';
import { ExpandableGallery } from './ExpandableGallery';
import {
  art_dance,
  photography
} from '../../Media/_export';

// const placeholder = <div style={{height: 'auto', width: '100%', display: 'flex', justifyContent: 'center', verticalAlign: 'center'}}>
//    <Spinner animation="border" />
//   </div>

const params = {
  spaceBetween: 10,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '2',
  lazy: {
    loadPrevNext: true,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  }
}
SwiperCore.use([EffectCoverflow, Pagination, Lazy]);
const layoutStyles = {margin:'0px', padding: '0px'};
export function _Photos({ id, isMobile, scrollbar, backgroundColor, setBackgroundColor, curPanel, setFontColor }) {
  const [curPhoto, setCurPhoto] = useState(""); //stores the img src 
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (curPanel === id) {
      setBackgroundColor(backgroundColor);
      setFontColor("white");
    }
  },[curPanel])
  
  useEffect(() => {
    // // if (isMobile) {
    //   Array.from(document.getElementsByClassName("images")).forEach(x => {
    //     x.addEventListener("click", handleImageClick);
    //   });
    // // }
    
    // return (() => {
    //   // if (isMobile) {
    //     Array.from(document.getElementsByClassName("images")).forEach(x => {
    //       x.removeEventListener("click", handleImageClick);
    //     });
    //   // }
    // })
  },[isMobile])

  const addEventListener = (e) => {
    e.target.addEventListener("click", handleImageClick);
  }

  const handleImageClick = (e) => {
    if (e.target.parentElement.classList.contains("swiper-slide-active")) {
      setIsOpen(true);
      setCurPhoto(e.target.id);
    }
  }

  // useEffect(() => {
  //   console.log(curPhoto)
  // },[curPhoto])
  
  return (
    <Container fluid id={id} style={{padding: isMobile ?  '10px 10px 60px 10px' : '10px 10% 60px 10%'}} className="page_section">
      <Helper.SectionHeader title="PHOTOS" />
      <Helper.SectionSubtitle subtitle="Here are a few snips of my drawings/processes, dance media, and photos I've taken over the past few years! While the photo quality or edits may not be the best, I still think it's worthwhile to share how I see the world with everyone." />
      <LazyLoad height="100vh" once offset={800}>
      {isMobile ? 
      <>
        <Row style={layoutStyles} className="justify-content-center">
          <h5 className="gallery_title">ART + DANCE</h5>
        </Row>
        <Jumbotron fluid>
          <Swiper {...params}>  
            {art_dance.map((x,i) => {
              return (
                // <div style={{backgroundImage: x.src}} />
                <SwiperSlide key={i} style={{display: 'flex', justifyContent: 'center'}}>
                    <img id={x.src} src={x.src} onLoad={addEventListener} className="swiper-lazy images" alt=""/>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </SwiperSlide>
                )
              })}
            </Swiper>
          </Jumbotron>
          <Row style={layoutStyles} className="justify-content-center">
            <h5 className="gallery_title">PHOTOGRAPHY</h5>
          </Row>
          <Jumbotron fluid>
            <Swiper {...params}>  
              {photography.map((x,i) => {
                return (
                  <SwiperSlide key={i} style={{display: 'flex', justifyContent: 'center'}}>
                      <img id={x.src} onLoad={addEventListener} src={x.src} className="swiper-lazy images" alt=""/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Jumbotron>
        {isOpen && 
          <Lightbox
            mainSrc={curPhoto}
            onCloseRequest={() => setIsOpen(false)}
            nextSrc={art_dance.map(x => x.src).includes(curPhoto) ? art_dance[(art_dance.findIndex(x => x.src === curPhoto) + 1) % art_dance.length].src : photography[(photography.findIndex(x => x.src === curPhoto) + 1) % photography.length].src}
            prevSrc={art_dance.map(x => x.src).includes(curPhoto) ? art_dance[(art_dance.findIndex(x => x.src === curPhoto) + art_dance.length- 1) % art_dance.length].src : photography[(photography.findIndex(x => x.src === curPhoto) + photography.length - 1) % photography.length].src}
            onMoveNextRequest={() => setCurPhoto(art_dance.map(x => x.src).includes(curPhoto) ? art_dance[(art_dance.findIndex(x => x.src === curPhoto) + 1) % art_dance.length].src : photography[(photography.findIndex(x => x.src === curPhoto) + 1) % photography.length].src)}
            onMovePrevRequest={() => setCurPhoto(art_dance.map(x => x.src).includes(curPhoto) ? art_dance[(art_dance.findIndex(x => x.src === curPhoto) + art_dance.length- 1) % art_dance.length].src : photography[(photography.findIndex(x => x.src === curPhoto) + photography.length - 1) % photography.length].src)}
          />
        }
      </>
      :
      <>
       <ExpandableGallery id="artdance" title="ART + DANCE" photos={art_dance}/>
       <ExpandableGallery id="photography" title="PHOTOGRAPHY" photos={photography}/>
        {/* <Jumbotron fluid className="gallery_wrapper">
          <Row style={layoutStyles} className="justify-content-center">
            <h5 className="gallery_title">ART + DANCE</h5>
          </Row>
          <Row className="justify-content-center" style={layoutStyles}>
            <Col>
              <Gallery images={art_dance}/>
            </Col>
          </Row>
        </Jumbotron>
        <Row style={layoutStyles} className="justify-content-center">
          <Button className="expand_gallery"></Button>
        </Row>
        <Jumbotron fluid className="gallery_wrapper">
          <Row style={layoutStyles} className="justify-content-center">
            <h5 className="gallery_title">PHOTOGRAPHY</h5>
          </Row>
          <Row className="justify-content-center" style={layoutStyles}>
            <Col>
              <Gallery images={photography} />
            </Col>
          </Row>
        </Jumbotron>
        <Row style={layoutStyles} className="justify-content-center">
          <Button className="expand_gallery" onClick={handleClickExpand}>
                        {expanded?
                        <FontAwesomeIcon style={{color: "white"}} icon={faAngleDoubleUp} size="2x" /> : 
                        <FontAwesomeIcon style={{color: "white"}} icon={faAngleDoubleDown} size="2x" /> }
                    </Button>
        </Row> */}
      </>
      }
      </LazyLoad>
    </Container>
  );
}
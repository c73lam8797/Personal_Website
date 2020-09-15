import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Gallery from 'react-grid-gallery';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../../CSS/_photos.css';
import Swiper from 'react-id-swiper';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow, Lazy } from 'swiper';
import Lightbox from 'react-image-lightbox';

const layoutStyles = {margin:'0px', padding: '0px'};
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
export function PreviewGallery({ id, photos, title, link }) {
  return (
  <>
   <Jumbotron fluid className="gallery_wrapper not_expanded" id={id}>
      <Row style={layoutStyles} className="justify-content-center">
        <h5 className="gallery_title">{title}</h5>
      </Row>
      <Row className="justify-content-center" style={layoutStyles}>
        <Col style={{position: 'relative'}}>
          {/* <div className="overlay" id={`overlay_${id}`}/> */}
          <Gallery images={photos} />
        </Col>
      </Row>
    </Jumbotron>
    <Row style={{...layoutStyles, transform: "translateY(-100%)"}} className="justify-content-center">
      <Button className="expand_gallery">
        <a href={link} target="_blank" rel="noopener noreferrer">Click to See More!</a>
      </Button>
    </Row>
  </>
  );
}

export function SwipeGallery({ title, photos, link }) {
  const [curPhoto, setCurPhoto] = useState(""); //stores the img src 
  const [isOpen, setIsOpen] = useState(false);
  const addEventListener = (e) => {
    e.target.addEventListener("click", handleImageClick);
  }
  const handleImageClick = (e) => {
    if (e.target.parentElement.classList.contains("swiper-slide-active")) {
      setIsOpen(true);
      setCurPhoto(e.target.id);
    }
  }
  return (
    <>
    <Row style={layoutStyles} className="justify-content-center">
      <h5 className="gallery_title">{title}</h5>
    </Row>
    <Row style={{...layoutStyles}} className="justify-content-center">
      <Button className="expand_gallery">
        <a href={link} target="_blank" rel="noopener noreferrer">Click to See More!</a>
      </Button>
    </Row>
    <Jumbotron fluid>
      <Swiper {...params}>  
        {photos.map((x,i) => {
          return (
            <SwiperSlide key={i} style={{display: 'flex', justifyContent: 'center'}}>
                <img id={x.src} src={x.src} onLoad={addEventListener} className="swiper-lazy images" alt=""/>
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
        nextSrc={photos[(photos.findIndex(x => x.src === curPhoto) + 1) % photos.length].src}
        prevSrc={photos[(photos.findIndex(x => x.src === curPhoto) + photos.length- 1) % photos.length].src}
        onMoveNextRequest={() => setCurPhoto(photos[(photos.findIndex(x => x.src === curPhoto) + 1) % photos.length].src)}
        onMovePrevRequest={() => setCurPhoto(photos[(photos.findIndex(x => x.src === curPhoto) + photos.length- 1) % photos.length].src)}
      />
    }
  </>
  )
}
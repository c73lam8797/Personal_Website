import React, { useEffect } from 'react';
import * as Helper from '../Helpers';
import Container from 'react-bootstrap/Container'
import SwiperCore, { Pagination, EffectCoverflow, Lazy } from 'swiper';
import LazyLoad from 'react-lazyload';
import '../../CSS/_photos.css';
import * as Gallery from './Gallery';
import {
  art_dance,
  photography
} from '../../Media/_export';


SwiperCore.use([EffectCoverflow, Pagination, Lazy]);
// const layoutStyles = {margin:'0px', padding: '0px'};
export function _Photos({ id, isMobile, scrollbar, backgroundColor, setBackgroundColor, curPanel, setFontColor }) {
  useEffect(() => {
    if (curPanel === id) {
      setBackgroundColor(backgroundColor);
      setFontColor("white");
    }
  },[curPanel])
  return (
    <Container fluid id={id} style={{padding: isMobile ?  '10px 10px 60px 10px' : '10px 10% 60px 10%'}} className="page_section">
      <Helper.SectionHeader title="PHOTOS" />
      <Helper.SectionSubtitle subtitle="Here are a few snips of my drawings/processes, dance media, and photos I've taken over the past few years! While the photo quality or edits may not be the best, I still think it's worthwhile to share how I see the world with everyone." />
      <LazyLoad height="100vh" once offset={800}>
      {isMobile ? 
      <>
        <Gallery.SwipeGallery  title="ART + DANCE" photos={art_dance} link="https://flic.kr/s/aHsmQMmBhB" />
        <Gallery.SwipeGallery  title="PHOTOGRAPHY" photos={photography} link="https://flic.kr/s/aHsmQMmUxD"/>
      </>
      :
      <>
       <Gallery.PreviewGallery id="artdance" title="ART + DANCE" photos={art_dance} link="https://flic.kr/s/aHsmQMmBhB"/>
       <Gallery.PreviewGallery id="photography" title="PHOTOGRAPHY" photos={photography} link="https://flic.kr/s/aHsmQMmUxD"/>
      </>
      }
      </LazyLoad>
    </Container>
  );
}
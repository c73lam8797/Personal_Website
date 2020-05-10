import React, { useEffect, useState } from 'react';

import Slideshow from './Slideshow';
import Gallery from './Gallery';


import './CSS/slideshow.css';

import {
    art_dance,
    photography
} from './Media/export';

export default function Photos() {
    const [showSlideshow, changeShowSlideshow] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', resizeFunction);
    })

    const resizeFunction = () => {
        if (window.innerWidth < 1000) { changeShowSlideshow(true); }
        else {changeShowSlideshow(false); }
    }

    return (
        <div className="photos" id="photos">
            <div className="placeholder" />
            <h1>— PHOTOS —</h1>
            { (window.innerWidth < 1000 || showSlideshow )? 
                <Slideshow media={art_dance} 
                    name="art_dance" 
                    mediaName="slide" 
                    colName="art_dance_col"
                    first = "first_art_dance"
                    last = "last_art_dance"
                    prev_col = "art_dance_prev_col" 
                    cur_col = "art_dance_cur_col"
                    next_col = "art_dance_next_col"/> :
                    <Gallery media={art_dance} mediaName="slide" />
                }
            { (window.innerWidth < 1000 || showSlideshow )? 
                <Slideshow media={photography} 
                            name="photography" 
                            mediaName="photo" 
                            colName="photography_col"
                            first="first_photography"
                            last="last_photography"
                            prev_col="photography_prev_col"
                            cur_col="photography_cur_col"
                            next_col="photography_next_col"/> : 
                <Gallery media={photography} mediaName="photo" />}
        </div>
    )
}
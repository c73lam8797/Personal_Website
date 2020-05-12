import React from 'react';
import Images from './Images';

import './CSS/photogallery.css';

import {
    art_dance,
    photography
} from './Media/export';

export default function Photos() {
    return (
        <div className="photos" id="photos">
            <div className="placeholder" />
            <h1>— PHOTOS —</h1>
            <Images media={art_dance} 
                        name="art_dance" 
                        mediaId="slide"  
                        />

            <Images media={photography} 
                        name="photography" 
                        mediaId="photo" 
                        />
            <div className="placeholder"></div>
        </div>
    );
}
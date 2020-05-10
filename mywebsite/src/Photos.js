import React from 'react';
import Expandable from './Expandable';

import './CSS/photos.css';

import {
    art_dance,
    photography
} from './Media/export';

export default function Photos() {
    return (
        <div className="photos" id="photos">
            <div className="placeholder" />
            <h1>— PHOTOS —</h1>
            <Expandable media={art_dance} 
                        name="art_dance" 
                        mediaId="slide"  
                        />

            <Expandable media={photography} 
                        name="photography" 
                        mediaId="photo" 
                        />

        </div>
    );
}
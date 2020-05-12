import React, { useEffect, useState, lazy, Suspense } from 'react';
import './CSS/photogallery.css';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Slideshow from './Slideshow';
// import Gallery from './Gallery';

import { PhotoPlaceholder } from './Load';

const Gallery = lazy(() => import('./Gallery'));
const Slideshow = lazy(() => import('./Slideshow'));



export default function Images({media, name, mediaId}) {
    const [showSlideshow, changeShowSlideshow] = useState(window.innerWidth < 1000 ? true: false);
    useEffect(() => {
        window.addEventListener('resize', resizeFunction);
        resizeFunction();

        return ( ()=> {
            window.removeEventListener('resize', resizeFunction);
        })
    }, [])
    const resizeFunction = () => {
        if (window.innerWidth < 1000) {changeShowSlideshow(true); }
        else {changeShowSlideshow(false); }
    }

    return (
        <div>
            { (showSlideshow )? 
                <Suspense fallback={<PhotoPlaceholder />} >
                    <Slideshow media={media} 
                        name={name} 
                        mediaId={mediaId}/> 
                </Suspense>
                :
                <Suspense fallback={<PhotoPlaceholder />} >
                    <Gallery media={media} mediaId={mediaId} name={name} showSlideshow={showSlideshow} changeShowSlideshow={changeShowSlideshow} />
                </Suspense>
            }
        </div>
    )
}
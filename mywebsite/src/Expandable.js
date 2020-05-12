import React, { useEffect, useState, lazy, Suspense } from 'react';
import './CSS/photos.css';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Slideshow from './Slideshow';
// import Gallery from './Gallery';

import { PhotoPlaceholder } from './Load';

const Gallery = lazy(() => import('./Gallery'));
const Slideshow = lazy(() => import('./Slideshow'));



export default function Expandable({media, name, mediaId}) {
    const [showSlideshow, changeShowSlideshow] = useState(window.innerWidth < 1000 ? true: false);
    const [expanded, changeExpanded] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', resizeFunction);
        resizeFunction();

        return ( ()=> {
            window.removeEventListener('resize', resizeFunction);
        })
    }, [])

    useEffect(() => {
        hideGallery();
    },[showSlideshow])

    const resizeFunction = () => {
        if (window.innerWidth < 1000) {changeShowSlideshow(true); document.getElementById(`expand_${name}`).style.opacity = 1;}
        else {changeShowSlideshow(false); hideGallery();}
    }

    const handleClickExpand = ()=> {
        if ( expanded ) {
            hideGallery();
            
        }
        else {
            showGallery();
            
        }
       
    }

    const hideGallery = () => {
        if (!showSlideshow) {
            const expand = document.getElementById(`expand_${name}`)
            const overlay = document.getElementById(`overlay_${name}`);
            expand.style.maxHeight = "500px";
            expand.style.opacity = 0.5;
            overlay.style.opacity = 1;
            overlay.style.backgroundImage = "linear-gradient(0deg, rgba(196,196,196,0.5970763305322129) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)";
            changeExpanded(false);
        }
    }

    const showGallery = () => {
        if (!showSlideshow) {
            const expand = document.getElementById(`expand_${name}`)
            const overlay = document.getElementById(`overlay_${name}`);
            expand.style.maxHeight = expand.scrollHeight+"px";
            expand.style.opacity = 1;
            overlay.style.opacity = 0;
            overlay.style.backgroundImage = "none";
            changeExpanded(true);
        }
    }

    return (
        <div className="expand_container">
            <div className="expandable" id={`expand_${name}`}>
                { (showSlideshow )? null: <div className="overlay" id={`overlay_${name}`}></div> }
                { (showSlideshow )? 
                    <Suspense fallback={<PhotoPlaceholder />} >
                        <Slideshow media={media} 
                            name={name} 
                            mediaId={mediaId}/> 
                    </Suspense>
                    :
                    <Suspense fallback={<PhotoPlaceholder />} >
                        <Gallery media={media} mediaId={mediaId} />
                    </Suspense>
                   
                }
            </div>
            {(showSlideshow) ? null :
                <Suspense fallback={null}>
                    <div className="expand_button_container">
                        <Button variant="outlined" className="expand_button" value={`expand_${name}`} onClick={handleClickExpand}>
                            {expanded?
                            <FontAwesomeIcon style={{color: "white"}} icon={faAngleDoubleUp} size="2x" /> : 
                            <FontAwesomeIcon style={{color: "white"}} icon={faAngleDoubleDown} size="2x" /> }
                        </Button>
                    </div>
                </Suspense>
            }
        </div>
    )
}
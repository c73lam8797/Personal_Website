import React, { useEffect, useState } from 'react';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';

import Slideshow from './Slideshow';
import Gallery from './Gallery';

import './CSS/photos.css';

export default function Expandable({media, name, mediaId}) {
    const [showSlideshow, changeShowSlideshow] = useState(false);
    const [expanded, changeExpanded] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', resizeFunction);
        document.getElementById(`expand_${name}`).style.opacity = 0.5;
    }, [])

    useEffect(() => {
        resizeFunction();
    })

    const resizeFunction = () => {
        if (window.innerWidth < 1000) { changeShowSlideshow(true); }
        else {changeShowSlideshow(false); }
    }

    const handleClickExpand = ()=> {
        const expand = document.getElementById(`expand_${name}`)
        const overlay = document.getElementById(`overlay_${name}`);
        if ( expanded ) {
            expand.style.maxHeight = "500px";
            expand.style.opacity = 0.5;
            overlay.style.background = "linear-gradient(0deg, rgba(196,196,196,0.5970763305322129) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)"
            changeExpanded(false);
        }
        else {
            expand.style.maxHeight = expand.scrollHeight+"px";
            expand.style.opacity = 1;
            overlay.style.background = "transparent";
            changeExpanded(true);
        }
       
    }

    return (
        <div className="expand_container">
            <div className="expandable" id={`expand_${name}`}>
            { (window.innerWidth < 1000 || showSlideshow )? null: <div className="overlay" id={`overlay_${name}`}></div> }
            { (window.innerWidth < 1000 || showSlideshow )? 
                <Slideshow media={media} 
                    name={name} 
                    mediaId={mediaId}/> :
                <Gallery media={media} mediaName={mediaId} />
            }
            </div>
            {(window.innerWidth < 1000 || showSlideshow) ? null :
                <div className="expand_button_container">
                    <Button variant="outlined" className="expand_button" value={`expand_${name}`} onClick={handleClickExpand}>
                        {expanded?
                        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" /> : 
                        <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" /> }
                    </Button>
                </div>
            }
        </div>
    )
}
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
        resizeFunction();
    })

    const resizeFunction = () => {
        if (window.innerWidth < 1000) { changeShowSlideshow(true); }
        else {changeShowSlideshow(false); }
    }

    const handleClickExpand = (e) => {
        if ( document.getElementById(`expand_${name}`).style.maxHeight === "none" ) {
            document.getElementById(`expand_${name}`).style.maxHeight = "600px";
            changeExpanded(false);
        }
        else {
            document.getElementById(`expand_${name}`).style.maxHeight = "none";
            changeExpanded(true);
        }
       
    }

    return (
        <div className="expand_container">
            <div id={`expand_${name}`}>
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
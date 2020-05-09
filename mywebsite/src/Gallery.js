import React, { useEffect, useState } from 'react'; 
import './CSS/gallery.css'


export default function Gallery(props) {
    //this has to be a state because it bugs out otherwise :)
    let [slideshowMedia, changeImg_array] = useState([...props.media.map(item => {
        return (React.cloneElement(item));
    })]);

    useEffect(()=> {
        if (document.body.contains(document.getElementById("gallery"))) {
            const imgs = Array.from(document.getElementsByClassName(props.mediaName));
            imgs.forEach ((item) => {
                item.style.maxHeight = "100%";
                item.style.objectFit = "contain";
                item.style.borderRadius = "5px";
            })
        }
    })
    return ( 
        <div className="gallery" id="gallery">
            {slideshowMedia.map ((item, index) => {
                return (
                    <div className="gallery_column" key={index}>
                        {item}
                    </div>
                )
            })}
        </div>
    );   
};
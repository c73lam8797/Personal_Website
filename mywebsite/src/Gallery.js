import React, { useEffect, useState } from 'react'; 
import './CSS/gallery.css'


export default function Gallery({media, mediaId}) {
    //this has to be a state because it bugs out otherwise :)
    let [slideshowMedia, changeImg_array] = useState([...media.map(item => {
        return (React.cloneElement(item));
    })]);

    useEffect(()=> {
        if (document.body.contains(document.getElementById("gallery"))) {
            const imgs = Array.from(document.getElementsByClassName(mediaId));
            imgs.forEach ((item) => {
                item.style.maxHeight = "100%";
                item.style.objectFit = "contain";
                item.style.borderRadius = "5px";
            })
        }

        // createGallery();
    })

    const createGallery = () => {
        let columns = [];

        let numCols = 4;
        let buffer = [];
        for (let i = 0; i<numCols; i++) {
            buffer.push([]);
        }

        let i =0;
        while (i<slideshowMedia.length) {
            for (let j = 0; j<numCols; j++) {
                buffer[j].push(slideshowMedia[i]);
                i++;
                if (i===slideshowMedia.length) {break;}
            }
        }

        for (let i = 0; i<buffer.length; i++) {
            columns.push(<div className="gallery_column">{buffer[i]}</div>);
        }

        return columns;
    }

    return ( 
        <div className="gallery" id="gallery">
            {/* {slideshowMedia.map ((item, index) => {
                return (
                    <div className="gallery_column" key={index}>
                        {item}
                    </div>
                )
            })} */}
            {createGallery()}
        </div>
    );   
};
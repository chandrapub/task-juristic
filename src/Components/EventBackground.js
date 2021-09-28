import React, { useEffect, useState } from 'react';
import Event1 from '../Assets/Images/Event1.jpg';
import Event2 from '../Assets/Images/Event2.jpg';
import Event3 from '../Assets/Images/Event3.jpg';
import Event4 from '../Assets/Images/Event4.jpg';

const images = [
    Event1, Event2, Event3, Event4
]

export default function EventBackground({children}) {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageIndex, setImageIndex] = useState(0);
    let timer;

    const renderImage = () => {
        timer = setInterval(() => {
            if(imageIndex === images.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(prev => prev + 1);
            }
            setCurrentImage(images[imageIndex]);
        }, 3000);
    };

    useEffect(() => {
        renderImage();
        return () => {
            clearTimeout(timer);
        }
    }, [imageIndex]);

    return (
        <div className="image-container" style={{backgroundImage: `url(${currentImage})`}}>
            {children}
        </div>
    )
}

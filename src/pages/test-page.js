import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
 
const PhotoGallery = () => {
    const images = [
      {
        original: '/eventphoto/IntelligenceX/1.jpg',
        thumbnail: '/eventphoto/IntelligenceX/1.jpg',
      },
      {
        original: '/eventphoto/IntelligenceX/2.jpg',
        thumbnail: '/eventphoto/IntelligenceX/2.jpg'
      },
      {
        original: '/eventphoto/IntelligenceX/3.jpg',
        thumbnail: '/eventphoto/IntelligenceX/3.jpg'
      }
    ]
 
    return (
      <div>
      <ImageGallery items={images} />
      </div>
    );
}

export default PhotoGallery
import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
 
const PhotoGallery = (props) => {
    return (
      <div>
      <ImageGallery items={props.images} />
      </div>
    );
}

export default PhotoGallery
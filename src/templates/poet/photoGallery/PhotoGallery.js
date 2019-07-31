import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './photoGallery.module.css';


const PhotoGallery = ({ gallery }) => {
  const images = gallery.map(img => ({ original: img.file.url, thumbnail: img.file.url }));

  return (
    <div className={styles.photo_gallery_wrapper}>
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
    </div>
  );
};

export default PhotoGallery;


PhotoGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string),
};

PhotoGallery.defaultProps = {
  gallery: '',
};

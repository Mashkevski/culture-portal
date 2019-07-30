import React from 'react';
import propTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './photoGallery.module.css';

import krapiva1 from '../../../images/krapiva_1.jpg';
import krapiva2 from '../../../images/krapiva_2.jpg';
import krapiva3 from '../../../images/krapiva_3.jpeg';
import krapiva4 from '../../../images/krapiva_4.jpg';
import krapiva5 from '../../../images/krapiva_5.jpg';
import krapivaCopy1 from '../../../images/krapiva_1 copy.jpg';
import krapivaCopy2 from '../../../images/krapiva_2 copy.jpg';
import krapivaCopy3 from '../../../images/krapiva_3 copy.jpeg';
import krapivaCopy4 from '../../../images/krapiva_4 copy.jpg';
import krapivaCopy5 from '../../../images/krapiva_5copy.jpg';


const PhotoGallery = ({ data }) => {
  const images = [
    {
      original: krapiva1,
      thumbnail: krapivaCopy1,
    },
    {
      original: krapiva2,
      thumbnail: krapivaCopy2,
    },
    {
      original: krapiva3,
      thumbnail: krapivaCopy3,
    },
    {
      original: krapiva4,
      thumbnail: krapivaCopy4,
    },
    {
      original: krapiva5,
      thumbnail: krapivaCopy5,
    },
  ];

  return (
    <div className={styles.photo_gallery_wrapper}>
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
    </div>
  );
};

export default PhotoGallery;


PhotoGallery.propTypes = {
  data: propTypes.string,
};

PhotoGallery.defaultProps = {
  data: '',
};

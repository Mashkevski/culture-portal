import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout/layout';
import PhotoGallery from '../components/photoGallery/PhotoGallery';
import Timeline from '../components/timeline/timeline';
import VitaComponent from '../components/vita/vita';
import VideoComponent from '../components/youtubeWidget/youtubeComponent';
import GoogleMap from '../components/googleMap';
import ArtistWorks from '../components/artistsWorks/artistWorks';
import styles from './poet.module.css';

const Poet = ({ data, intl }) => {
  const { node } = data.allContentfulPoetDescription.edges
    .find(edge => edge.node.poet.lng === intl.locale);
  const { poet, image, images } = node;
  const { timelineData } = node.poet;
  const places = timelineData.filter(place => place.lng && place.lat);
  return (
    <Layout>
      <VitaComponent
        img={image.file.url}
        name={poet.name}
        liveDates={poet.date}
        birthPlace={poet.birthPlace}
        vita={poet.vita}
      />
      <ArtistWorks poet={poet} />
      <Timeline poet={poet} />
      {images !== null && <PhotoGallery gallery={images} />}
      {poet.videoId !== '' && <VideoComponent id={poet.videoId} />}
      <div className={styles.map}>
        <GoogleMap places={places} />
      </div>
    </Layout>
  );
};

Poet.propTypes = {
  data: propTypes.shape({
    allContentfulPoetDescription: propTypes.shape({
      edges: propTypes.array,
    }),
  }).isRequired,
  intl: propTypes.shape({
    locale: propTypes.string.isRequired,
  }).isRequired,
};

export default injectIntl(Poet);

export const query = graphql`
  query($slug: String!) {
    allContentfulPoetDescription(filter: {node_locale: {eq: "en-US"}, title: {eq: $slug}}) {
      edges {
        node {
          poet {
            id
            birthPlace
            date
            img
            lng
            name
            timelineData {
              date
              text
              lat
              lng
            }
            videoId
            vita
            work {
              date
              title
            }
          }
          image {
            file {
              url
            }
          }
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

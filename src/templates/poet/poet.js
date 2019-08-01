/* eslint-disable react/no-array-index-key */
import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../../components/layout/layout';
import PhotoGallery from '../../components/photoGallery/PhotoGallery';
import Timeline from '../../components/timeline/timeline';
import VitaComponent from '../../components/vita/vita';

const Poet = ({ data, intl }) => {
  const { node } = data.allContentfulPoetDescription.edges
    .find(edge => edge.node.poet.lng === intl.locale);
  const { poet, image, images } = node;
  const idOfAuthor = poet.img.replace(/.jpg/gi, '');
  return (
    <Layout>
      <VitaComponent
        img={image.file.url}
        name={poet.name}
        liveDates={poet.date}
        lng={poet.lng}
        birthPlace={poet.birthPlace}
        vita={poet.vita}
        id={idOfAuthor}
      />
      <Timeline poet={poet} />
      {images !== null && <PhotoGallery gallery={images} />}
    </Layout>
  );
};

export default injectIntl(Poet);

export const query = graphql`
  query($slug: String!) {
    allContentfulPoetDescription(filter: {node_locale: {eq: "en-US"}, title: {eq: $slug}}) {
      edges {
        node {
          poet {
            birthPlace
            date
            img
            lng
            name
            timelineData {
              date
              text
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

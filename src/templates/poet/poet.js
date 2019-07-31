/* eslint-disable react/no-array-index-key */
import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../../components/layout/layout';
import PhotoGallery from './photoGallery/PhotoGallery';
import Timeline from '../../components/timeline/timeline';

const Poet = ({ data, intl }) => {
  const { node } = data.allContentfulPoetDescription.edges
    .find(edge => edge.node.poet.lng === intl.locale);
  const { poet, image, images } = node;
  return (
    <Layout>
      <h2>{poet.name}</h2>
      <img alt={poet.name} src={image.file.url} />
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


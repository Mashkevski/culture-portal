import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../../components/layout/layout';

const Poet = ({ data, intl }) => {
  const { node } = data.allContentfulPoetDescription.edges
    .find(edge => edge.node.poet.lng === intl.locale);
  const { poet, image } = node;
  return (
    <Layout>
      <h2>{poet.name}</h2>
      <img alt={poet.name} src={image.file.url} />
    </Layout>
  );
};

export default injectIntl(Poet);

export const query = graphql`
  query($slug: String!) {
    allContentfulPoetDescription(filter: {title: {eq: $slug}}) {
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

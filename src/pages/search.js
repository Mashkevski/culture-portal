import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link, injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/layout/layout';

const Search = ({ data, intl }) => (
  <Layout>
    <h2>Search</h2>
    <ul>
      {data.allContentfulPoetDescription.edges
        .filter(edge => edge.node.poet.lng === intl.locale).map(edge => (
          <li>
            <Link to={`/poet/${edge.node.title}`}>
              <h2>{edge.node.poet.name}</h2>
            </Link>
          </li>
        ))}
    </ul>
  </Layout>
);

export default injectIntl(Search);

export const query = graphql`
  query searchQuery {
    allContentfulPoetDescription(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          poet {
            birthPlace
            date
            lng
            name
            vita
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

Search.propTypes = {
  data: propTypes.shape({
    allContentfulPoetDescription: propTypes.shape({
      edges: propTypes.array,
    }),
  }).isRequired,
  intl: propTypes.shape({
    locale: propTypes.string.isRequired,
  }).isRequired,
};

/* eslint-disable arrow-body-style */
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
        .filter(edge => edge.node.poet.lng === intl.locale).map((edge) => {
          return (
            <li>
              <Link to={`/poet/${edge.node.title}`}>
                <h2>{edge.node.poet.name}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  </Layout>
);

export default injectIntl(Search);

export const query = graphql`
  query searchQuery {
    allContentfulPoetDescription {
      edges {
        node {
          poet {
            name
            lng
          }
          title
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

/* eslint-disable arrow-body-style */
import React from 'react';
import propTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';

const Search = ({ data }) => (
  <Layout>
    <h2>Search</h2>
    <ul>
      {data.allContentfulPoetDescription.edges.map((edge) => {
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

export default Search;

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
  }),
};

Search.defaultProps = {
  data: null,
};

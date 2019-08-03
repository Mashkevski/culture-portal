import React, { useState } from 'react';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import AuthorOfTheDay from '../components/authorOfTheDay/authorOfTheDay';

import Developers from '../components/developerTeam/developers';

import developerTeam from '../data/team';

const IndexPage = ({ data, intl }) => {
  const initialPoets = useState(
    data.allContentfulPoetDescription.edges.filter(edge => edge.node.poet.lng === intl.locale),
  )[0];
  const [poets] = useState(initialPoets);
  return (
    <Layout>
      <AuthorOfTheDay poets={poets} />
      <Developers team={developerTeam[intl.locale]} />
    </Layout>
  );
};


export default injectIntl(IndexPage);

export const query = graphql`
    query IndexQuery {
    allContentfulPoetDescription {
      edges {
        node {
          poet {
            date
            name
            vita
            lng
          }
          image {
            file {
              url
            }
          }
          title
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: propTypes.shape({
    allContentfulPoetDescription: propTypes.shape({
      edges: propTypes.arrayOf(
        propTypes.shape({
          node: propTypes.shape({
            poet: propTypes.shape({
              id: propTypes.string.isRequired,
              name: propTypes.string.isRequired,
              date: propTypes.string.isRequired,
              birthPlace: propTypes.string.isRequired,
              vita: propTypes.string.isRequired,
              lng: propTypes.string.isRequired,
            }).isRequired,
            title: propTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,

  }).isRequired,
  intl: propTypes.shape({
    locale: propTypes.string.isRequired,
    messages: propTypes.shape({
      'search.nothing': propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

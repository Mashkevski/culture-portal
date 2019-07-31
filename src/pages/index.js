import React from 'react';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import AuthorOfTheDay from '../components/authorOfTheDay/authorOfTheDay';

const IndexPage = ({ data }) => {
  const { poet, image } = data.contentfulPoetDescription;
  const { url } = image.file;
  return (
    <Layout>
      <AuthorOfTheDay poet={poet} url={url} />
    </Layout>
  );
};

export default injectIntl(IndexPage);

export const query = graphql`
  query IndexQuery {
    contentfulPoetDescription(title: {eq: "glebka"}, poet: {lng: {eq: "en"}}) {
      poet {
        date
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
`;

IndexPage.propTypes = {
  data: propTypes.shape({
    contentfulPoetDescription: propTypes.shape({
      image: propTypes.shape({
        file: propTypes.shape({
          url: propTypes.string.isRequired,
        }),
      }),
      poet: propTypes.shape({
        name: propTypes.string,
        vita: propTypes.string,
        date: propTypes.string,
      }),

    }),
  }),
};

IndexPage.defaultProps = {
  data: null,
};

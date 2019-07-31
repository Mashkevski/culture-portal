import React from 'react';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

const IndexPage = ({ data }) => {
  const { poet, image } = data.contentfulPoetDescription;
  const { url } = image.file;
  return (
    <Layout>
      <div style={{
        background: '#dddddd',
        width: '50%',
        margin: '0 auto',
      }}
      >
        <h3>Author of the day</h3>
        <h4>{poet.name}</h4>
        <img alt={poet.name} src={url} />
        <p>{poet.date}</p>
        <p>{poet.vita}</p>
      </div>
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

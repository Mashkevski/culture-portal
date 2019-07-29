import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

const IndexPage = ({ data }) => {
  const { poet } = data.contentfulPoetDescription;
  const { url } = data.contentfulPoetPicture.image.file;
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

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    contentfulPoetPicture(title: {eq: "glebka"}) {
      image {
        file {
          url
        }
      }
    }
    contentfulPoetDescription(title: {eq: "glebka"}, poet: {lng: {eq: "en"}}) {
      poet {
        date
        name
        vita
      }
    }
  }
`;

IndexPage.propTypes = {
  data: propTypes.string,
};

IndexPage.defaultProps = {
  data: '',
};

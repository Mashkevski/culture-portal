import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';

import Layout from '../components/layout/layout';

const Poet = ({ data }) => {
  const { poet } = data.contentfulPoetDescription;
  const { url } = data.contentfulPoetPicture.image.file;
  return (
    <Layout>
      <h2>{poet.name}</h2>
      <img alt={poet.name} src={url} />
    </Layout>
  );
};

Poet.propTypes = {
  data: propTypes.string,
};

Poet.defaultProps = {
  data: '',
};

export default Poet;

export const query = graphql`
  query($slug: String!) {
    contentfulPoetDescription(title: {eq: $slug}) {
      poet {
        name
        birthPlace
        date
        img
        lng
        videoId
        vita
        timelineData {
          date
          text
        }
        work {
          date
          title
        }
      }
    }
    contentfulPoetPicture(image: {title: {eq: $slug}}) {
      image {
        file {
          url
        }
        title
      }
    }
  }
`;
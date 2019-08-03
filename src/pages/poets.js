import React, { useState } from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout/layout';
import SearchInput from '../components/SearchInput';
import PoetCard from '../components/PoetCard';

const useStyles = makeStyles({
  wrapper: {
    minWidth: 320,
    maxWidth: 800,
    margin: '0 auto',
    padding: '0 10px',
  },
  poets: {
    display: 'grid',
    justifyContent: 'center',
    gridGap: 20,
    marginTop: 20,
  },
});

const Poets = ({ data, intl }) => {
  const initialPoets = useState(
    data.allContentfulPoetDescription.edges.filter(edge => edge.node.poet.lng === intl.locale),
  )[0];
  const [poets, setPoets] = useState(initialPoets);

  const classes = useStyles();
  return (
    <Layout className={classes.layout}>
      <div className={classes.wrapper}>
        <SearchInput poets={initialPoets} setPoets={setPoets} />
        <div className={classes.poets}>
          {
            poets.length
              ? poets.map(({ node }) => <PoetCard key={node.poet.id} data={node} />)
              : <h3>{ intl.messages['search.nothing'] }</h3>
          }
        </div>
      </div>
    </Layout>
  );
};

Poets.propTypes = {
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

export default injectIntl(Poets);

export const query = graphql`
  query searchQuery {
    allContentfulPoetDescription {
      edges {
        node {
          poet {
            id
            name
            birthPlace
            date
            vita
            lng
          }
          title
        }
      }
    }
  }
`;

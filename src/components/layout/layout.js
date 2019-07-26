/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import propTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import Poet from '../poet/poet';
import './layout.css';

const Layout = ({ data, children }) => (
  <>
    <Header />
    <main>
      <Poet data={data ? data.allContentfulPoets.edges[0] : null} />
      {children}
    </main>
    <footer>
      footer
    </footer>
  </>
);

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
  data: propTypes.shape({
    allContentfulPoets: propTypes.shape({
      edges: propTypes.array,
    }),
  }),
};

Layout.defaultProps = {
  data: null,
};

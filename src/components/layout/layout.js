import React from 'react';
import propTypes from 'prop-types';
import Header from '../header/header';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="page-main">
      {children}
    </main>
  </>
);

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

export default Layout;

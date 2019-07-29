import React from 'react';
import propTypes from 'prop-types';

import Header from '../header/header';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
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

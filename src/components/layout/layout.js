import React from 'react';
import propTypes from 'prop-types';
import Header from '../header/header';
import styles from './layout.module.css';
import Language from '../language';

const Layout = ({ children }) => (
  <>
    <div className={styles.header}>
      <div className={styles.language}>
        <div className={styles.container}>
          <Language />
        </div>
      </div>
      <Header />
    </div>
    <main>
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

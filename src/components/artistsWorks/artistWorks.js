import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';
import propTypes from 'prop-types';
import styles from './artistWorks.module.css';


const ArtistWorks = ({ poet }) => (
  <div className={styles.wrap}>
    <div className={styles.container}>
      <ul>
        {poet.work.map(workObj => (
          <p key={workObj.title}>
            <em>{workObj.title}</em>
            <span className={styles.year}>{workObj.date}</span>
          </p>
        ))}
      </ul>
    </div>
  </div>
);

export default injectIntl(ArtistWorks);

ArtistWorks.propTypes = {
  poet: propTypes.shape({
    work: propTypes.arrayOf(propTypes.shape({
      title: propTypes.string,
      date: propTypes.string,
    })),
  }),
};

ArtistWorks.defaultProps = {
  poet: '',
};

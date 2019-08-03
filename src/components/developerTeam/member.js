import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './developerTeamStyle.module.css';


const Member = ({ developer, avatarDefault }) => (
  <div className={styles.developer} key={developer.fullName}>
    <img className={styles.avatar_developer} src={developer.url || avatarDefault} alt="avatar" />
    <p>{developer.fullName}</p>
    <a href={`https://github.com/${developer.github}`}>
      <p className={styles.developer_github}>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        {` ${developer.github}`}
      </p>
    </a>
    <div className={styles.kind_work}>
      <p>
        {developer.contribution}
      </p>
    </div>
  </div>

);

export default injectIntl(Member);

Member.propTypes = {
  developer: propTypes.shape({
    fullName: propTypes.string,
    github: propTypes.string,
    url: propTypes.string,
    contribution: propTypes.string,
  }),
  avatarDefault: propTypes.string,
};

Member.defaultProps = {
  developer: '',
  avatarDefault: '',
};

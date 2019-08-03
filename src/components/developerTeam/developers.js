import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';
import propTypes from 'prop-types';

import styles from './developerTeamStyle.module.css';

import Member from './member';


const Developers = ({ team }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{team.title}</h2>
    <ul className={styles.team}>
      {team.developers.map(developer => (
        <Member developer={developer} avatarDefault={team.avatarDefault} key={developer.fullName} />
      ))}
    </ul>
  </div>
);

export default injectIntl(Developers);

Developers.propTypes = {
  team: propTypes.shape({
    title: propTypes.string.isRequired,
    developers: propTypes.arrayOf(propTypes.shape({
      fullName: propTypes.string,
      github: propTypes.string,
      url: propTypes.string,
      contribution: propTypes.string,
    })),
    avatarDefault: propTypes.string,
  }),
};

Developers.defaultProps = {
  team: '',
};

import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';
import propTypes from 'prop-types';

import './developerTeamStyle.css';

// import iconGitHub from '../../team/developerTeam/GitHub32.png';

// import iconGitHub from '../../data/developerTeam/GitHub32.png';

// import developerTeam from './developerTeamEn.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Member = ({ developer, avatarDefault }) => (
  <div className="developer" key={developer.fullName}>
    <img className="avatar-developer" src={developer.url || avatarDefault} alt="avatar" />
    <p>{developer.fullName}</p>
    <a href={`https://github.com/${developer.github}`}>
      <p className="developer-github">
        <span><FontAwesomeIcon icon={faGithub} /></span>
        {` ${developer.github}`}
      </p>
      {/* <img src={iconGitHub} alt="git hub" /> */}
    </a>
    <div className="kind-work">
      <p className="">
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

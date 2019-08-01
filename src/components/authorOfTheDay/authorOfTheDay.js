import React from 'react';
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

import styles from './authorOfTheDay.module.css';


const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
    '&:hover': {
      backgroundColor: lightBlue[800],
    },
  },
}))(Button);

const AuthorOfTheDay = ({ poet, url }) => (
  <div className={styles.author}>
    <h2 className={styles.author_title}>
      <FormattedMessage id="author_of_the_day_title" />
    </h2>
    <h3 className={styles.author_name}>
      {poet.name}
    </h3>
    <p className={styles.author_date}>
      {poet.date}
    </p>
    <img className={styles.author_photo} src={url} alt="Author" />
    <p className={styles.author_vita}>
      {poet.vita}
    </p>
    <Link to="/author" className={styles.author_btn}>
      <ColorButton variant="contained">
        <FormattedMessage id="button" />
      </ColorButton>
    </Link>
  </div>
);

export default injectIntl(AuthorOfTheDay);


AuthorOfTheDay.propTypes = {
  poet: PropTypes.shape({
    date: PropTypes.string,
    name: PropTypes.string,
    vita: PropTypes.string,
  }),
  url: PropTypes.string,
};

AuthorOfTheDay.defaultProps = {
  poet: '',
  url: '',
};

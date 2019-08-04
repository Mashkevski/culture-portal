import React from 'react';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MobileMenu from '../mobileMenu/mobileMenu';
import styles from './header.module.css';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    margin: '0 auto',
    maxWidth: 960,
    padding: '35px 20px 20px 0',
  },
  rightMenu: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  link: {
    textTransform: 'uppercase',
    padding: 5,
    marginLeft: 25,
    color: '#ffffff',
    textDecoration: 'none',
    borderBottom: '2px solid transparent',
  },
  activeLink: {
    borderBottom: '2px solid #039be5',
  },
});

const Header = ({ intl }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <h1 className={`${classes.logo} ${styles.logo}`}>
          {intl.messages.siteTitle}
        </h1>
      </Link>
      <nav className={classes.rightMenu}>
        <Link
          to="/"
          className={`${classes.link} ${styles.link}`}
          activeClassName={classes.activeLink}
        >
          {intl.messages.home}
        </Link>
        <Link
          to="/poets"
          className={`${classes.link} ${styles.link}`}
          activeClassName={classes.activeLink}
        >
          {intl.messages.poets}
        </Link>
        <div className={styles.mobile_menu}>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default injectIntl(Header);

Header.propTypes = {
  intl: propTypes.shape({
    messages: propTypes.shape({
      siteTitle: propTypes.string.isRequired,
      home: propTypes.string.isRequired,
      poets: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

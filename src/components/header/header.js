import React from 'react';
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';

import Language from '../language';
import MobileMenu from '../mobileMenu/mobileMenu';
import styles from './header.module.css';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: '10px 20px',
  },
  rightMenu: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  link: {
    padding: 5,
    fontSize: 20,
    color: '#039BE5',
    textDecoration: 'none',
  },
  activeLink: {
    fontWeight: 'bold',
    borderBottom: '2px solid #039BE5',
  },
  language: {
    display: 'block',
    marginLeft: 20,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <h1 className={`${classes.logo} ${styles.logo}`}>
          <FormattedMessage id="siteTitle" />
        </h1>
      </Link>
      <nav className={classes.rightMenu}>
        <Link
          to="/"
          className={`${classes.link} ${styles.link}`}
          activeClassName={classes.activeLink}
        >
          <FormattedMessage id="home" />
        </Link>
        <Link
          to="/poets"
          className={`${classes.link} ${styles.link}`}
          activeClassName={classes.activeLink}
        >
          <FormattedMessage id="poets" />
        </Link>
        <div className={classes.language}>
          <Language />
        </div>
        <div className={styles.mobile_menu}>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default injectIntl(Header);

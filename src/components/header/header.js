import React from 'react';
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import Language from '../Language';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: '10px 20px',
  },
  logo: {
    fontSize: 28,
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
    marginLeft: 20,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <h1 className={classes.logo}>
          <FormattedMessage id="siteTitle" />
        </h1>
      </Link>
      <nav className={classes.rightMenu}>
        <Link
          to="/"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <FormattedMessage id="home" />
        </Link>
        <Link
          to="/poets"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <FormattedMessage id="poets" />
        </Link>
        <div className={classes.language}>
          <Language />
        </div>
      </nav>
    </header>
  );
};

export default injectIntl(Header);

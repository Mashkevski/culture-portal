import React from 'react';
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import Language from '../language';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'blue',
  },
  logo: {
    fontSize: 24,
  },
  rightMenu: {
    marginLeft: 'auto',
  },
  link: {
    fontSize: 20,
    color: 'white',
    textDecoration: 'none',
    '&:not(:first-child)': {
      marginLeft: 10,
    },
  },
  activeLink: {
    fontWeight: 'bold',
    borderBottom: '2px solid white',
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

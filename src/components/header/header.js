import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

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
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <h1 className={classes.logo}>Poets of Belarus</h1>
      </Link>
      <nav className={classes.rightMenu}>
        <Link
          to="/"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Home
        </Link>
        <Link
          to="/poets"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Poets
        </Link>
      </nav>
    </header>
  );
};

export default Header;

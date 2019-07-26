import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <h1
      style={{
        margin: 0,
        color: 'white',
      }}
    >
      Poets of Belarus
    </h1>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
        marginRight: '10px',
      }}
    >
        Home
    </Link>

    <Link
      to="/search/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      Search
    </Link>
  </header>
);

export default Header;

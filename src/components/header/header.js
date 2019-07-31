import React from 'react';
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Language from '../language';

const Header = () => (
  <header
    style={{
      background: 'rebeccapurple',
      position: 'relative',
    }}
  >
    <h1
      style={{
        margin: 0,
        color: 'white',
      }}
    >
      <FormattedMessage id="siteTitle" />
    </h1>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
        marginRight: '10px',
      }}
    >
      <FormattedMessage id="home" />
    </Link>

    <Link
      to="/search/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <FormattedMessage id="search" />
    </Link>
    <div
      style={{
        position: 'absolute',
        right: '0',
        top: '0',
      }}
    >
      <Language />
    </div>
  </header>
);

export default injectIntl(Header);

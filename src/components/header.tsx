import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { ShoppingCart } from './ShoppingCart/ShoppingCart';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ShoppingCart/>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

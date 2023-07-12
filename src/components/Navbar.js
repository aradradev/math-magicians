import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navItem">
    <ul className="ulElement">
      <li>
        <Link style={{ textDecoration: 'none', color: 'red' }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'red' }} to="/calculator">
          Calculator
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'red' }} to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;

import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

// const Logo = require('../assets/logo.png');
import Logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/login') {
    return (
      <div className="navBar">
        <Link to="/profile" className="navLinks">
          <img className="navLogo" id="navLogo" src={Logo} alt="logo" />
        </Link>
        <div className="rightLinks">
          <Link to="/signup" className="navLinks">
            Sign up
          </Link>
        </div>
      </div>
    );
  }

  if (location.pathname === '/signup') {
    return (
      <div className="navBar">
        <Link to="/profile" className="navLinks">
          <img className="navLogo" id="navLogo" src={Logo} alt="logo" />
        </Link>
        <Link to="/" className="navLinks">
          Login
        </Link>
      </div>
    );
  } else
    return (
      <div className="navBar">
        <Link to="/profile" className="navLinks">
          <img className="navLogo" id="navLogo" src={Logo} alt="logo" />
        </Link>
        <Link to="/profile" className="navLinks">
          Profile
        </Link>
        <Link to="/algoform" className="navLinks">
          Submit an Algorithm
        </Link>
      </div>
    );
}

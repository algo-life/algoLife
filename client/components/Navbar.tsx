import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

// const Logo = require('../assets/logo.png');
import Logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <div className="navBar">
        <Link to="/" className="navLinks">
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
        <Link to="/" className="navLinks">
          <img className="navLogo" id="navLogo" src={Logo} alt="logo" />
        </Link>
        <Link to="/" className="navLinks">
          Login
        </Link>
      </div>
    );
  }
  // if (location.pathname === '/login') {
  //   return (
  //     <div className="navBar">
  //       <Link to="/signup" className="navLinks">
  //         Sign up
  //       </Link>
  //     </div>
  //   );
  // }
  if (location.pathname === '/main') {
    return (
      <div className="navBar">
        <Link to="/" className="navLinks">
          <img className="navLogo" id="navLogo" src={Logo} alt="logo" />
        </Link>
      </div>
    );
  }
  // return (
  //   <div>
  //     <Link to="/signup">Sign up</Link>
  //     <Link to="/login">Login</Link>
  //     <Link to="/main">Main</Link>
  //   </div>
  // );
}

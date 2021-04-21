import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Login</Link>
      <Link to="/main">Main</Link>
    </div>
  );
}

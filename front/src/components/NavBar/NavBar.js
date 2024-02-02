import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">ComicWeb</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
}

export default NavBar;

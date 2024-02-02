import React from 'react';
import './style.css';

function NavBar() {
  return (
    <nav className="navbar">
      {/* Navigation links can go here */}
      <a href="/">Home</a>
      <a href="/latest">Latest Updates</a>
      <a href="/genres">Genres</a>
      {/* Add more links as needed */}
    </nav>
  );
}

export default NavBar;

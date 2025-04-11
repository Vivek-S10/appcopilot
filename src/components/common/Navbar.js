import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">AppCopilot Rental</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
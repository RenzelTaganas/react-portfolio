/**
 * File Name: Navbar.jsx
 * Student Name: Renzel Taganas
 * Student ID: 301403038
 * Date: September 29, 2024
 * Description: Navigation bar component with links to different pages in the React portfolio.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import logo image
import './Navbar.css';

// Function: Navbar
// Description: Renders a navigation bar with links to different sections.
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo Link to Home */}
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

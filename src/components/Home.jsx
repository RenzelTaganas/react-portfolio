/**
 * File Name: Home.jsx
 * Student Name: Renzel Taganas
 * Student ID: 301403038
 * Date: September 29, 2024
 * Description: Home page component that displays a welcome message and a button link to the About page.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Function: Home
// Description: Renders the home page with a welcome message and link to the About page.
function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is where you’ll find information about my projects and skills.</p>
      <Link to="/about"><button>Learn More About Me</button></Link>
    </div>
  );
}

export default Home;

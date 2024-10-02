/**
 * File Name: Services.jsx
 * Student Name: Renzel Taganas
 * Student ID: 301403038
 * Date: September 29, 2024
 * Description: Services page component that lists the services offered, including programming and development skills.
 */

import React from 'react';
import './Services.css';

// Function: Services
// Description: Renders a list of services provided, including web development, mobile development, and general programming.
function Services() {
  return (
    <div className="services">
      <h1>Services I Offer</h1>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>General Programming</li>
      </ul>
    </div>
  );
}

export default Services;

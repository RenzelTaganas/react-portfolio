/**
 * File Name: About.jsx
 * Student Name: Renzel Taganas
 * Student ID: 301403038
 * Date: September 29, 2024
 * Description: About page component that provides a brief introduction and a link to download the resume.
 */

import React from 'react';
import profilePic from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';
import './About.css';

// Function: About
// Description: Renders the About page with a profile picture, bio, and a resume download button.
function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <p>Hi, I’m Renzel Taganas. I am a web developer with a passion for creating interactive and user-friendly websites.</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <button className="download-button">Download My Resume</button>
      </a>
    </div>
  );
}

export default About;

/**
 * File Name: Projects.jsx
 * Student Name: Renzel Taganas
 * Student ID: 301403038
 * Date: September 29, 2024
 * Description: Displays a list of projects, including clickable images that redirect to project links.
 */

import React from 'react';
import './Projects.css';
import slideShow from '../assets/slide-show.png';
import bugSmasher from '../assets/bug-smasher.png';
import slideShowAPI from '../assets/slide-show-api.png';

// Function: Projects
// Description: Renders a list of project cards with images and descriptions.
// Each image redirects to an external project link.
function Projects() {
  // Array containing project data (title, description, image, and link)
  const projectData = [
    {
      title: 'Interactive Slide Show Project',
      description: 'A dynamic slide show that displays various images interactively.',
      image: slideShow,
      link: 'https://example.com/interactive-slide-show'
    },
    {
      title: 'Bug Smasher Game',
      description: 'A fun game where users smash bugs appearing on the screen to score points.',
      image: bugSmasher,
      link: 'https://example.com/bug-smasher-game'
    },
    {
      title: 'Interactive Slide Show Project using APIs',
      description: 'An extended version of the interactive slide show that pulls data from external APIs.',
      image: slideShowAPI,
      link: 'https://example.com/interactive-slide-show-api'
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-gallery">
        {/* Map through project data to render each project card */}
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            {/* Image Link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            {/* Project Title and Description */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

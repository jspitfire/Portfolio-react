// ProjectsPage.js
import React from 'react';
import Project from './Project';

function ProjectsPage() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <Project title="Project 1" description="Description of Project 1" />
        <Project title="Project 2" description="Description of Project 2" />
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default ProjectsPage;

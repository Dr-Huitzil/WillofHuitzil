import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects, onProjectClick }) => {
  return (
    <section className="projects-section" id="projects">
      <div className="pill section-pill">
        ARTIFACTS
      </div>
      <h2 className="serif-header serif-glow section-title">Greenhouse<br/>Projections</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => onProjectClick(project)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

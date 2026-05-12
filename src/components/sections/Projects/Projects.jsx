import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = ({ projects, onProjectClick }) => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className="pill section-pill">
        ARTIFACTS
      </div>
      <h2 className="serif-header serif-glow section-title">Greenhouse<br/>Projections</h2>
      
      <div className={styles.projectsGrid}>
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

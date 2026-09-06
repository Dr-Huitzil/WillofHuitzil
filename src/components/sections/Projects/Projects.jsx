// src/components/sections/Projects/Projects.jsx

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.projectsSection} id="projects">
      <SectionHeader tag="PROJECTS" title="Selected Works" />

      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;

import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.projectCard} onClick={onClick}>
      <div className={styles.projectImageContainer}>
        {/* We use a placeholder div with a background color/image. 
            In a real app, use an actual img tag or background-image. */}
        <div className={styles.projectImagePlaceholder}></div>
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.projectTags}>
          {project.tags?.map((tag, index) => (
            <span key={index} className={`mono-accent ${styles.projectTag}`}>{tag.toUpperCase()}</span>
          ))}
        </div>
        <h3 className={`serif-header ${styles.cardTitle}`}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        
        <div className={`${styles.projectLinks} mono-accent`}>
          <a href="#" onClick={(e) => e.stopPropagation()}>
            <GitBranch size={14} /> SOURCE
          </a>
          <a href="#" onClick={(e) => e.stopPropagation()}>
            <ExternalLink size={14} /> EXPLORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

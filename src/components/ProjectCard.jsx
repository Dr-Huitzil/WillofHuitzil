import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        {/* We use a placeholder div with a background color/image. 
            In a real app, use an actual img tag or background-image. */}
        <div className="project-image-placeholder"></div>
        <div className="project-id mono-accent">{project.id.toString().padStart(2, '0')}</div>
      </div>
      
      <div className="project-content">
        <h3 className="serif-header card-title">{project.title.toUpperCase().replace(/\s+/g, '_')}</h3>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-links mono-accent">
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

import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content project-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2 className="serif-header">{project.title}</h2>
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="mono-accent tag">{tag}</span>
          ))}
        </div>
        <div className="project-description">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

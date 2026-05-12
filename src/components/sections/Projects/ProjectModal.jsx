import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Github, ExternalLink, ChevronRight, ChevronUp } from 'lucide-react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  const renderLongDescription = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      if (line.trim().startsWith('### ')) {
        return <h3 key={i} className="mono-accent">{line.replace('### ', '').trim()}</h3>;
      }
      return <p key={i}>{line}</p>;
    });
  };

  const projectSummary = (
    <div className={styles.projectSummary}>
      <div className={styles.projectIdentity}>
        <h2 className={`serif-header ${styles.modalTitle}`}>{project.title}</h2>
        <div className={styles.modalTags}>
          {project.tags?.map(tag => (
            <span key={tag} className={`mono-accent ${styles.tag}`}>[{tag.toUpperCase()}]</span>
          ))}
        </div>
        {project.date && <p className={`mono-accent ${styles.projectDate}`}>{project.date}</p>}
      </div>

      <div className={styles.projectDescription}>
        <p>{project.description}</p>
      </div>

      <div className={`${styles.modalLinks} mono-accent`}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
            <Github size={14} /> SOURCE_REPO
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
            <ExternalLink size={14} /> LIVE_SYSTEM
          </a>
        )}
      </div>

      <button
        className={`${styles.expandBtn} mono-accent`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'LESS INFO' : 'MORE INFO'}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className={`${styles.modalFooterText} mono-accent`}>
        PROJECT_ARTIFACT_V1.0 // <br />
        ACCESS_GRANTED
      </div>
    </div>
  );

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={`${styles.projectModal} ${isExpanded ? styles.expanded : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.modalContentWrapper}>
          <div className={styles.modalLeft}>
            <div className={styles.modalImage}></div>
            {isExpanded && projectSummary}
          </div>

          <div className={styles.modalRight}>
            {!isExpanded ? projectSummary : (
              <div className={styles.expandedInfoSection}>
                <h3 className={`serif-header ${styles.expandedTitle}`}>Deep<br />Analysis</h3>
                <div className={styles.longDescription}>
                  {renderLongDescription(project.longDescription)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;

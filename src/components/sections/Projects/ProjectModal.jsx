import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronRight, ChevronUp } from 'lucide-react';
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

      <div className={`${styles.projectDescription} ${styles.mobileHideDescription}`}>
        <p>{project.description}</p>
      </div>

      <div className={`${styles.modalLinks} mono-accent`}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            SOURCE_REPO
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            LIVE_SYSTEM
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

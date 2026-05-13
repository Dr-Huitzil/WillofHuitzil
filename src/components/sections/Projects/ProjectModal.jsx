import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronRight, ChevronUp, Github, Monitor } from 'lucide-react';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { renderMarkdown } from '../../../utils/renderMarkdown';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // iOS-safe scroll lock — centralized, no duplication
  useBodyScrollLock();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Guard: render nothing if data is missing
  if (!project) return null;

  const handleToggleExpand = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  const projectSummary = (
    <div className={styles.projectSummary}>
      <div className={styles.projectIdentity}>
        <h2 className={`serif-header ${styles.modalTitle}`}>{project.title}</h2>

        <div className={styles.modalTags}>
          {project.tags?.map((tag) => (
            <span key={tag} className={`mono-accent ${styles.tag}`}>
              [{tag.toUpperCase()}]
            </span>
          ))}
        </div>

        {project.date && (
          <p className={`mono-accent ${styles.projectDate}`}>{project.date}</p>
        )}
      </div>

      <div className={`${styles.projectDescription} ${styles.mobileHideDescription}`}>
        <p>{project.description}</p>
      </div>

      <div className={`${styles.modalLinks} mono-accent`}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="View source repository"
          >
            <Github size={14} />
            SOURCE_REPO
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="View live system"
          >
            <Monitor size={14} />
            LIVE_SYSTEM
          </a>
        )}
      </div>

      <button
        className={`${styles.expandBtn} mono-accent`}
        onClick={handleToggleExpand}
        aria-expanded={isExpanded}
        aria-controls="project-deep-analysis"
      >
        {isExpanded ? 'LESS INFO' : 'MORE INFO'}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className={`${styles.modalFooterText} mono-accent`}>
        PROJECT_ARTIFACT_V1.0 //<br />ACCESS_GRANTED
      </div>
    </div>
  );

  return createPortal(
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${styles.projectModal} ${isExpanded ? styles.expanded : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className={styles.modalContentWrapper}>
          <div className={styles.modalLeft}>
            <div className={styles.modalImage} />
            {isExpanded && projectSummary}
          </div>

          <div className={styles.modalRight}>
            {!isExpanded ? (
              projectSummary
            ) : (
              <div
                id="project-deep-analysis"
                className={styles.expandedInfoSection}
              >
                <h3 className={`serif-header ${styles.expandedTitle}`}>
                  Deep<br />Analysis
                </h3>
                <div className={styles.longDescription}>
                  {renderMarkdown(project.longDescription)}
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

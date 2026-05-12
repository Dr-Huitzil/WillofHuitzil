import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Briefcase, Calendar, MapPin, ChevronRight, ChevronDown } from 'lucide-react';
import styles from './ExperienceModal.module.css';

const ExperienceModal = ({ experience, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!experience) return null;

  const renderLongDescription = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <h3 key={i}>{line.replace('### ', '')}</h3>;
      }
      return <p key={i}>{line}</p>;
    });
  };

  const experienceSummary = (
    <div className={styles.experienceSummary}>
      <div className={styles.modalHeader}>
        <div className={styles.iconBox}>
          <Briefcase size={30} color="var(--accent-teal-bright)" />
        </div>
        <div className={styles.headerInfo}>
          <h2 className={`serif-header ${styles.role}`}>{experience.role}</h2>
          <div className={`mono-accent ${styles.company}`}>{experience.company}</div>
        </div>
      </div>

      <div className={styles.metaRow}>
        <div className={`mono-accent ${styles.metaItem}`}>
          <Calendar size={14} /> {experience.period}
        </div>
        <div className={`mono-accent ${styles.metaItem}`}>
          <MapPin size={14} /> REMOTE // ON-SITE
        </div>
      </div>

      <div className={styles.modalContent}>
        <h4 className={`mono-accent ${styles.contentTitle}`}>MISSION_OBJECTIVES</h4>
        <ul className={styles.detailsList}>
          {experience.details?.map((detail, index) => (
            <li key={index} className={styles.detailItem}>
              <span className={styles.bullet}>&gt;</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {experience.longDescription && (
        <button 
          className={`${styles.expandBtn} mono-accent`} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'LESS INFO' : 'MORE INFO'} 
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
      )}

      <div className={`${styles.modalFooter} mono-accent`}>
        EXP_LOG_ID: {experience.id * 1234} // ACCESS_LEVEL: SENIOR
      </div>
    </div>
  );

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div 
        className={`${styles.experienceModal} ${isExpanded ? styles.expanded : ''}`} 
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.modalContentWrapper}>
          <div className={styles.modalLeft}>
            <div className={styles.modalImage}></div>
            {isExpanded && experienceSummary}
          </div>

          <div className={styles.modalRight}>
            {!isExpanded ? experienceSummary : (
              <div className={styles.expandedInfoSection}>
                <h3 className={`serif-header ${styles.expandedTitle}`}>Technical<br/>Brief</h3>
                <div className={styles.longDescription}>
                  {renderLongDescription(experience.longDescription)}
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

export default ExperienceModal;

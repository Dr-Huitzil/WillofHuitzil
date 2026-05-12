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
      if (line.trim().startsWith('### ')) {
        return <h3 key={i} className="mono-accent">{line.replace('### ', '').trim()}</h3>;
      }
      return <p key={i}>{line}</p>;
    });
  };

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div 
        className={`${styles.experienceModal} ${isExpanded ? styles.expanded : ''}`} 
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className={styles.modalContentWrapper}>
          {/* LEFT SIDEBAR: Metadata */}
          <div className={styles.modalLeft}>
            <div className={styles.sidebarMeta}>
              <div className={styles.iconBox}>
                <Briefcase size={28} color="var(--accent-teal-bright)" />
              </div>
              
              <div className={styles.mainMeta}>
                <h2 className={`serif-header ${styles.role}`}>{experience.role}</h2>
                <div className={`mono-accent ${styles.company}`}>{experience.company}</div>
              </div>

              <div className={styles.subMeta}>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Calendar size={14} /> {experience.period}
                </div>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <MapPin size={14} /> REMOTE // ON-SITE
                </div>
              </div>

              {experience.longDescription && (
                <button 
                  className={`${styles.expandBtn} mono-accent`} 
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'LESS_INFO' : 'DEEP_ANALYSIS'} 
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
              )}
            </div>

            <div className={`${styles.modalFooter} mono-accent`}>
              EXP_LOG_ID: {experience.id * 1234} <br/>
              ACCESS_LEVEL: SENIOR
            </div>
          </div>

          {/* RIGHT PANEL: Content */}
          <div className={styles.modalRight}>
            <div className={styles.contentSection}>
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

            {isExpanded && experience.longDescription && (
              <div className={styles.expandedInfoSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>TECHNICAL_BRIEF</h4>
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

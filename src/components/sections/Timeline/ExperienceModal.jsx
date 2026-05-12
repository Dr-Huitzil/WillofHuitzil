import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Briefcase, Calendar, MapPin } from 'lucide-react';
import styles from './ExperienceModal.module.css';

const ExperienceModal = ({ experience, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!experience) return null;

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.experienceModal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

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

        <div className={`${styles.modalFooter} mono-accent`}>
          EXP_LOG_ID: {experience.id * 1234} // ACCESS_LEVEL: SENIOR
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ExperienceModal;

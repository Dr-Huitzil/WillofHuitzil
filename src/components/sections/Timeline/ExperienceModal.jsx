// src/components/sections/Timeline/ExperienceModal.jsx

import React, { useCallback, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronDown } from 'lucide-react';
import ModalShell from '@/components/ui/ModalShell/ModalShell';
import { renderMarkdown } from '@/utils/renderMarkdown';
import styles from './ExperienceModal.module.css';

const ExperienceModal = ({ experience, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!experience) return null;

  const handleToggleExpand = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  // Boolean() explicitly handles null, undefined, and empty string ""
  const hasLongDescription = Boolean(experience.longDescription);

  return (
    <ModalShell
      onClose={onClose}
      ariaLabel={`${experience.role} at ${experience.company}`}
    >
      <div
        className={`${styles.experienceModal} ${isExpanded ? styles.expanded : ''}`}
      >
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

              {hasLongDescription && (
                <button
                  className={`${styles.expandBtn} mono-accent`}
                  onClick={handleToggleExpand}
                  aria-expanded={isExpanded}
                  aria-controls="exp-technical-brief"
                >
                  {isExpanded ? 'LESS_INFO' : 'DEEP_ANALYSIS'}
                  {isExpanded
                    ? <ChevronDown size={14} />
                    : <ChevronRight size={14} />}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: Content */}
          <div className={styles.modalRight}>
            <div className={styles.mobileHideContent}>
              <div className={styles.contentSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>
                  CORE_ENDEAVORS
                </h4>
                <ul className={styles.detailsList}>
                  {experience.details?.map((detail) => (
                    // Use content string as key — more stable than array index
                    <li key={detail} className={styles.detailItem}>
                      <span className={styles.bullet}>&gt;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {isExpanded && hasLongDescription && (
              <div id="exp-technical-brief" className={styles.expandedInfoSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>
                  KNOWLEDGE_TRANSFER
                </h4>
                <div className={styles.longDescription}>
                  {renderMarkdown(experience.longDescription)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalShell>
  );
};

export default ExperienceModal;

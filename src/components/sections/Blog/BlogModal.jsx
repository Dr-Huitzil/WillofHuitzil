import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, FileText, Calendar, Clock, Eye, ChevronRight, ChevronDown } from 'lucide-react';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { renderMarkdown } from '../../../utils/renderMarkdown';
import styles from './BlogModal.module.css';

const BlogModal = ({ post, onClose }) => {
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

  if (!post) return null;

  const handleToggleExpand = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  return createPortal(
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${post.title} by ${post.author}`}
    >
      <div
        className={`${styles.blogModal} ${isExpanded ? styles.expanded : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className={styles.modalContentWrapper}>
          {/* LEFT SIDEBAR: Metadata */}
          <div className={styles.modalLeft}>
            <div className={styles.sidebarMeta}>
              <div className={styles.iconBox}>
                <FileText size={28} color="var(--accent-teal-bright)" />
              </div>

              <div className={styles.mainMeta}>
                <h2 className={`serif-header ${styles.blogTitle}`}>{post.title}</h2>
                <div className={`mono-accent ${styles.author}`}>{post.author}</div>
              </div>

              <div className={styles.subMeta}>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Calendar size={14} /> {post.date}
                </div>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Clock size={14} /> {post.readTime}
                </div>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Eye size={14} /> {post.views} Views
                </div>
              </div>

              <button
                className={`${styles.expandBtn} mono-accent`}
                onClick={handleToggleExpand}
                aria-expanded={isExpanded}
                aria-controls="blog-technical-brief"
              >
                {isExpanded ? 'CLOSE_READER' : 'READ_LOG'}
                {isExpanded
                  ? <ChevronDown size={14} />
                  : <ChevronRight size={14} />}
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: Content */}
          <div className={styles.modalRight}>
            <div className={styles.mobileHideContent}>
              <div className={styles.contentSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>
                  SUMMARY
                </h4>
                <div className={styles.detailsList}>
                  <p className={styles.detailItem} style={{ color: 'var(--text-sans-slate)', lineHeight: 1.7, fontSize: '1rem' }}>
                    {post.summary}
                  </p>
                </div>
              </div>
            </div>

            {isExpanded && (
              <div id="blog-technical-brief" className={styles.expandedInfoSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>
                  ARTICLE
                </h4>
                <div className={styles.longDescription}>
                  {renderMarkdown(post.content)}
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

export default BlogModal;

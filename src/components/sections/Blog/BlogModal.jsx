import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Clock, Calendar, User } from 'lucide-react';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { renderMarkdown } from '../../../utils/renderMarkdown';
import styles from './BlogModal.module.css';

const BlogModal = ({ post, onClose }) => {
  useBodyScrollLock();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  return createPortal(
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.blogModal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className={styles.modalContent}>
          <header className={styles.modalHeader}>
            <div className={styles.modalImageContainer}>
               {post.imagePlaceholder ? (
                 <div className={styles.placeholderImg}>
                   <div className="mono-accent">
                     [{post.imagePlaceholder.replace('PLACEHOLDER_', '').replace(/_/g, ' ')}]
                   </div>
                 </div>
               ) : (
                 <img src={post.image} alt={post.title} className={styles.modalImg} />
               )}
            </div>
            
            <div className={styles.headerInfo}>
              <div className={styles.tags}>
                {post.tags?.map((tag, i) => (
                  <span key={i} className={`mono-accent ${styles.tag}`}>
                    [{tag.toUpperCase()}]
                  </span>
                ))}
              </div>
              
              <h1 className={`serif-header ${styles.modalTitle}`}>{post.title}</h1>
              
              <div className={styles.metaContainer}>
                <div className={styles.metaItem}>
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <div className={styles.metaItem}>
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          <div className={styles.articleBody}>
            {renderMarkdown(post.content)}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BlogModal;

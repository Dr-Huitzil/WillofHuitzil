import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ImageModal.module.css';

const ImageModal = ({ imageUrl, title, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!imageUrl) return null;

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className={styles.imageWrapper}>
          <img 
            src={imageUrl} 
            alt={title} 
            className={styles.modalImg} 
            loading="lazy" 
          />
        </div>
        <div className={styles.modalFooter}>
          <h3 className="serif-header">{title}</h3>
          <p className="mono-accent">VERIFIED_CREDENTIAL</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;

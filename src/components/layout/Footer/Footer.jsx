import React from 'react';
import { Leaf } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.logoIconSmall}>
          <Leaf size={14} color="var(--accent-teal-bright)" />
        </div>
        <div className={styles.footerBrand}>
          <span className={`serif-header ${styles.footerTitle}`}>Will of Huitzil</span>
          <span className={`mono-accent ${styles.footerSub}`}>MESOAMERICAN_SOLARPUNK &copy; 2024</span>
        </div>
      </div>

      <div className={`${styles.footerRight} mono-accent`}>
        {/* Placeholder for legal or versioning text if needed */}
      </div>
    </footer>
  );
};

export default Footer;

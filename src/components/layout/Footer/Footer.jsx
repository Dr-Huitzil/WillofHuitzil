import React from 'react';
import { Leaf } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
      </div>

      <div className={`${styles.footerRight} mono-accent`}>
        <div className={styles.footerBrand}>
          <span className={`serif-header ${styles.footerTitle}`}>Will of Huitzil</span>
          <span className={`mono-accent ${styles.footerSub}`}>Ivan Alier-Reyes &copy; 2026</span>
        </div>
        <div className={styles.logoIconSmall}>
          <Leaf size={14} color="var(--accent-teal-bright)" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

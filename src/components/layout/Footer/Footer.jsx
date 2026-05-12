import React from 'react';
import { Leaf, GitBranch, Briefcase, FileText, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.logoIconSmall}>
          <Leaf size={14} color="var(--accent-teal-bright)" />
        </div>
        <div className={styles.footerBrand}>
          <span className={`serif-header ${styles.footerTitle}`}>VIBRANT GROVE</span>
          <span className={`mono-accent ${styles.footerSub}`}>ARCHITECTURAL_ECO_LOGIC &copy; 2024</span>
        </div>
      </div>

      <div className={`${styles.footerCenter} mono-accent`}>
        <a href="https://github.com/ivan-alier-reyes" target="_blank" rel="noreferrer">
          <GitBranch size={14} /> GITHUB
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Briefcase size={14} /> LINKEDIN
        </a>
        <a href="#resume">
          <FileText size={14} /> RESUME
        </a>
        <a href="mailto:ialierreyes@gmail.com">
          <Mail size={14} /> MESSAGE
        </a>
      </div>

      <div className={`${styles.footerRight} mono-accent`}>
      </div>
    </footer>
  );
};

export default Footer;

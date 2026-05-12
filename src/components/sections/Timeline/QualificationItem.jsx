import React from 'react';
import * as LucideIcons from 'lucide-react';
import styles from './Timeline.module.css';

const QualificationItem = ({ title, subtitle, iconName, onClick }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.HelpCircle;

  return (
    <div 
      className={styles.qualItem} 
      onClick={onClick} 
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={styles.qualIcon}>
        <Icon size={18} />
      </div>
      <div className={styles.qualText}>
        <div className={`serif-header ${styles.serifHeader}`}>{title}</div>
        <div className={`mono-accent ${styles.qualSub}`}>{subtitle}</div>
      </div>
    </div>
  );
};

export default QualificationItem;

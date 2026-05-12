import React from 'react';
import styles from './Timeline.module.css';

const TimelineItem = ({ role, company, period, description }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineMarker}></div>
      <div className={styles.timelineContent}>
        <div className={styles.timelineHeader}>
          <h3 className="serif-header">{role}</h3>
          <span className={`mono-accent ${styles.datePill}`}>{period}</span>
        </div>
        <div className={`mono-accent ${styles.companyName}`}>{company}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

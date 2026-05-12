import React from 'react';
import TimelineItem from './TimelineItem';
import QualificationItem from './QualificationItem';
import ProficiencyPill from '../../ui/ProficiencyPill/ProficiencyPill';
import styles from './Timeline.module.css';

const Timeline = ({ experience = [], qualifications = [], proficiencies = [] }) => {
  return (
    <section className={styles.timelineSection} id="timeline">
      <div className={`pill ${styles.sectionPill}`}>
        TIMELINE
      </div>
      <h2 className={`serif-header serif-glow ${styles.sectionTitle}`}>Professional<br/>Path</h2>

      <div className={styles.timelineGrid}>
        {/* Left Side: Timeline */}
        <div className={styles.timelinePath}>
          {experience.map((item) => (
            <TimelineItem 
              key={item.id}
              role={item.role}
              company={item.company}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>

        {/* Right Side: Cards */}
        <div className={styles.timelineCards}>
          
          <div className={styles.glassCard}>
            <h4 className={`mono-accent ${styles.cardTitle}`}>QUALIFICATIONS</h4>
            <div className={styles.qualList}>
              {qualifications.map((qual) => (
                <QualificationItem 
                  key={qual.id}
                  title={qual.title}
                  subtitle={qual.subtitle}
                  iconName={qual.icon}
                />
              ))}
            </div>
          </div>

          <div className={styles.glassCard}>
            <h4 className={`mono-accent ${styles.cardTitle}`}>PROFICIENCIES</h4>
            <div className={styles.proficiencyGrid}>
              {proficiencies.map((skill, index) => (
                <ProficiencyPill key={index} name={skill} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;

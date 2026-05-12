import React from 'react';
import TimelineItem from './TimelineItem';
import QualificationItem from './QualificationItem';
import ProficiencyPill from './ProficiencyPill';
import './Timeline.css';

const Timeline = ({ experience = [], qualifications = [], proficiencies = [] }) => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="pill section-pill">
        TIMELINE
      </div>
      <h2 className="serif-header serif-glow section-title">Professional<br/>Path</h2>

      <div className="timeline-grid">
        {/* Left Side: Timeline */}
        <div className="timeline-path">
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
        <div className="timeline-cards">
          
          <div className="glass-card">
            <h4 className="mono-accent card-title">QUALIFICATIONS</h4>
            <div className="qual-list">
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

          <div className="glass-card">
            <h4 className="mono-accent card-title">PROFICIENCIES</h4>
            <div className="proficiency-grid">
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

import React from 'react';

const TimelineItem = ({ role, company, period, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3 className="serif-header">{role}</h3>
          <span className="mono-accent date-pill">{period}</span>
        </div>
        <div className="mono-accent company-name">{company}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

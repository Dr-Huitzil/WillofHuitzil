import React from 'react';
import * as LucideIcons from 'lucide-react';

const QualificationItem = ({ title, subtitle, iconName }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.HelpCircle;

  return (
    <div className="qual-item">
      <div className="qual-icon">
        <Icon size={18} />
      </div>
      <div className="qual-text">
        <div className="serif-header">{title}</div>
        <div className="mono-accent qual-sub">{subtitle}</div>
      </div>
    </div>
  );
};

export default QualificationItem;

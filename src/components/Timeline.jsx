import React from 'react';
import { Network, Shield, Cpu } from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="pill section-pill">
        TIMELINE
      </div>
      <h2 className="serif-header serif-glow section-title">Professional<br/>Path</h2>

      <div className="timeline-grid">
        {/* Left Side: Timeline */}
        <div className="timeline-path">
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="serif-header">Lead Infrastructure Architect</h3>
                <span className="mono-accent date-pill">2022 - PRESENT</span>
              </div>
              <div className="mono-accent company-name">EMERALD_GROVE</div>
              <p>Optimizing high-density infrastructure within Central American forest regions using solar-first protocols.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="serif-header">Full Stack Engineer</h3>
                <span className="mono-accent date-pill">2019 - 2022</span>
              </div>
              <div className="mono-accent company-name">VIBRANT_NETWORKS</div>
              <p>Built resilient, high-humidity tolerant network interfaces for edge computing clusters.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="serif-header">Computer Science Scholar</h3>
                <span className="mono-accent date-pill">2015 - 2019</span>
              </div>
              <div className="mono-accent company-name">NAYA_TECH_INSTITUTE</div>
              <p>Specializing in biomimetic systems and distributed ledger synchronization in extreme environments.</p>
            </div>
          </div>

        </div>

        {/* Right Side: Cards */}
        <div className="timeline-cards">
          
          <div className="glass-card">
            <h4 className="mono-accent card-title">QUALIFICATIONS</h4>
            <div className="qual-list">
              <div className="qual-item">
                <div className="qual-icon"><Network size={18} /></div>
                <div className="qual-text">
                  <div className="serif-header">AWS Architect</div>
                  <div className="mono-accent qual-sub">CLOUD ECOLOGY</div>
                </div>
              </div>
              <div className="qual-item">
                <div className="qual-icon"><Shield size={18} /></div>
                <div className="qual-text">
                  <div className="serif-header">Certified Ethical Hacker</div>
                  <div className="mono-accent qual-sub">EC-COUNCIL</div>
                </div>
              </div>
              <div className="qual-item">
                <div className="qual-icon"><Cpu size={18} /></div>
                <div className="qual-text">
                  <div className="serif-header">K8s Administrator</div>
                  <div className="mono-accent qual-sub">CNCF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h4 className="mono-accent card-title">PROFICIENCIES</h4>
            <div className="proficiency-grid">
              <span className="prof-pill mono-accent">Infrastructure</span>
              <span className="prof-pill mono-accent">Cloud Arch</span>
              <span className="prof-pill mono-accent">React/NextJS</span>
              <span className="prof-pill mono-accent">Network Sec</span>
              <span className="prof-pill mono-accent">Kubernetes</span>
              <span className="prof-pill mono-accent">Go</span>
              <span className="prof-pill mono-accent">Python</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;

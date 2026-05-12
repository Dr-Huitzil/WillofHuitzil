import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import QualificationItem from './QualificationItem';
import ProficiencyPill from '../../ui/ProficiencyPill/ProficiencyPill';
import ImageModal from '../../ui/ImageModal/ImageModal';
import ExperienceModal from './ExperienceModal';
import styles from './Timeline.module.css';

const Timeline = ({ experience = [], certifications = [], education = [], proficiencies = [], publications = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openImageModal = (item) => {
    setSelectedImage({
      url: item.image,
      title: item.title || item.degree
    });
  };

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
              onClick={() => setSelectedExperience(item)}
            />
          ))}
        </div>

        {/* Right Side: Cards */}
        <div className={styles.timelineCards}>
          
          <div className={styles.glassCard}>
            <h4 className={`mono-accent ${styles.cardTitle}`}>EDUCATION</h4>
            <div className={styles.qualList}>
              {education.map((edu) => (
                <QualificationItem 
                  key={edu.id}
                  title={edu.degree}
                  subtitle={edu.school}
                  iconName={edu.icon}
                  onClick={() => openImageModal(edu)}
                />
              ))}
            </div>
          </div>

          <div className={styles.glassCard}>
            <h4 className={`mono-accent ${styles.cardTitle}`}>CERTIFICATIONS</h4>
            <div className={styles.certGrid}>
              {certifications.map((cert) => (
                <QualificationItem 
                  key={cert.id}
                  title={cert.title}
                  subtitle={cert.subtitle}
                  iconName={cert.icon}
                  variant="square"
                  onClick={() => openImageModal(cert)}
                />
              ))}
            </div>
          </div>

          <div className={styles.glassCard}>
            <h4 className={`mono-accent ${styles.cardTitle}`}>PUBLICATIONS</h4>
            <div className={styles.qualList}>
              {publications.map((pub) => (
                <QualificationItem 
                  key={pub.id}
                  title={pub.title}
                  subtitle={pub.journal}
                  iconName={pub.icon}
                  onClick={() => pub.url && window.open(pub.url, '_blank')}
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

      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage.url} 
          title={selectedImage.title} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </section>
  );
};

export default Timeline;

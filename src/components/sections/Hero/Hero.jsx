import React from 'react';
import { GitBranch, Briefcase, FileText } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = ({ profile }) => {
  const { name, title, links } = profile;

  // Split name for the line break if it contains a space
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>

        <h1 className={`serif-header serif-glow ${styles.heroTitle}`}>
          {firstName}<br/>{lastName}
        </h1>
        
        <p className={`mono-accent ${styles.heroSubtitle}`}>
          {title}
        </p>

        <div className={styles.heroDescend}>
          <div className={styles.descendLinks}>
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer">
                <GitBranch size={20} />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Briefcase size={20} />
              </a>
            )}
            {links.resume && (
              <a href={links.resume}>
                <FileText size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

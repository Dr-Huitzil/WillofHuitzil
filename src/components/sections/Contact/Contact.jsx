import React from 'react';
import { Mail, Github, Linkedin, FileText, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = ({ links }) => {
  if (!links) return null;

  return (
    <section className={styles.contactSection} id="contact">
      <div className="pill section-pill">
        CONTACT
      </div>
      <h2 className="serif-header serif-glow section-title">Initialize<br />Connection</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <div className={styles.cardHeader}>
            <div className={styles.statusIndicator}>
              <div className={styles.pulse}></div>
              <span className="mono-accent">SYSTEM_ONLINE</span>
            </div>
            <h3 className="serif-header">Direct Channels</h3>
          </div>

          <div className={styles.linksGrid}>
            <a href={`mailto:ialierreyes@gmail.com`} className={styles.contactLink}>
              <div className={styles.iconBox}>
                <Mail size={20} />
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">EMAIL</span>
                <span className={styles.linkText}>ialierreyes@gmail.com</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>

            <a href={links.linkedin} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <div className={styles.iconBox}>
                <Linkedin size={20} />
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">LINKEDIN</span>
                <span className={styles.linkText}>Professional Network</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>

            <a href={links.github} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <div className={styles.iconBox}>
                <Github size={20} />
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">GITHUB</span>
                <span className={styles.linkText}>Source Archives</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>

            <a href={links.resume} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <div className={styles.iconBox}>
                <FileText size={20} />
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">RESUME</span>
                <span className={styles.linkText}>Technical Brief PDF</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>
          </div>

          <div className={styles.cardFooter}>
            <p className="mono-accent">ENCRYPTED_HANDSHAKE_READY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

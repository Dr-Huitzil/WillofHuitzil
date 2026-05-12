import React from 'react';
import { ExternalLink } from 'lucide-react';
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">EMAIL</span>
                <span className={styles.linkText}>ialierreyes@gmail.com</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>

            <a href={links.linkedin} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">LINKEDIN</span>
                <span className={styles.linkText}>Professional Network</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>

            <a href={links.github} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
              <div className={styles.linkInfo}>
                <span className="mono-accent">GITHUB</span>
                <span className={styles.linkText}>Source Archives</span>
              </div>
              <ExternalLink size={14} className={styles.arrow} />
            </a>

            <a href={links.resume} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
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

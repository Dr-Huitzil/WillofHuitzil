import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';

    const bootSequence = [
      { text: "INITIATING_SECURE_CONNECTION...", type: "system", delay: 100 },
      { text: "HANDSHAKE_ESTABLISHED", type: "success", delay: 400 },
      { text: "LOADING_PORTFOLIO_MODULES [4/4]", type: "system", delay: 800 },
      { text: "DECRYPTING_ASSETS...", type: "warning", delay: 1200 },
      { text: "SYSTEM_READY", type: "success", delay: 1700 },
    ];

    // Trigger logs
    bootSequence.forEach((log) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, log.delay);
    });

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random bursts of progress
        return Math.min(prev + Math.random() * 15 + 5, 100);
      });
    }, 150);

    // Finish loading
    const exitTimer = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
      
      // Give exit animation time to finish before unmounting
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 600); 
    }, 2000);

    return () => {
      document.body.style.overflow = '';
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.loadingContainer} ${isExiting ? styles.exiting : ''}`}>
      <div className={styles.terminalWindow}>
        <div className={styles.header}>
          <div className={styles.logoBox}>
            <Leaf size={20} color="var(--accent-teal-bright)" />
          </div>
          <h1 className={`serif-header ${styles.title}`}>HUITZIL_OS</h1>
        </div>

        <div className={`mono-accent ${styles.consoleOutput}`}>
          {logs.map((log, i) => (
            <div key={i} className={`${styles.logLine} ${styles[log.type]}`}>
              &gt; {log.text}
            </div>
          ))}
        </div>

        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

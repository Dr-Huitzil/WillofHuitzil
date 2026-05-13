import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.random() * 6 + 2, 100);
      });
    }, 250);

    const exitTimer = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
      
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 1200); 
    }, 3200);

    return () => {
      document.body.style.overflow = '';
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.loadingContainer} ${isExiting ? styles.exiting : ''}`}>
      <div className={styles.loadingWrapper}>
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }} 
          >
            <div className={styles.leafHead}>
              <Leaf size={16} color="var(--accent-citron)" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

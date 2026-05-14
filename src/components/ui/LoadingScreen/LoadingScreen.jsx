import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuetzalIcon from './QuetzalIcon';
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
        
        let increment = 0;
        if (prev < 25) {
          increment = Math.random() * 5 + 4; // Phase 1: Fast start to 25%
        } else if (prev < 35) {
          increment = Math.random() * 1.2 + 0.6; // Phase 2: Subtle slow down to 35%
        } else if (prev < 65) {
          increment = Math.random() * 4 + 2; // Phase 3: Speed up to 65%
        } else {
          increment = Math.random() * 20 + 15; // Phase 4: Fast finish
        }
        
        return Math.min(prev + increment, 100);
      });
    }, 100);

    const exitTimer = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
      
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 1200); 
    }, 3000);

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
          <motion.div 
            className={styles.progressBar} 
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.quetzalHead}>
              <QuetzalIcon size={200} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;


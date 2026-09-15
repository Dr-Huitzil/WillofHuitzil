// src/components/ui/ExpandableImage/ExpandableImage.jsx

import React, { useState, useCallback } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import styles from './ExpandableImage.module.css';

/**
 * ExpandableImage component for blog posts and markdown rendering.
 *
 * Displays a compact, consistent preview with a half-fading bottom gradient
 * and an interactive "CLICK TO EXPAND" overlay in the collapsed state.
 * When clicked, smoothly expands to display the full image, providing
 * a "CLICK TO MINIMIZE" control to return to the consistent size.
 */
const ExpandableImage = ({ src, alt = '', caption, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpand();
      }
    },
    [toggleExpand]
  );

  return (
    <figure className={`${styles.figureWrapper} ${className}`}>
      <div
        className={`${styles.imageCard} ${isExpanded ? styles.expanded : styles.collapsed}`}
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={
          isExpanded
            ? `Minimize image: ${alt || caption || 'Image'}`
            : `Click to expand image: ${alt || caption || 'Image'}`
        }
      >
        <div className={styles.imageViewport}>
          <img
            src={src}
            alt={alt || caption || 'Blog image preview'}
            className={`${styles.image} ${isExpanded ? styles.imageFull : styles.imageThumb}`}
            loading="lazy"
          />

          {!isExpanded && (
            <div className={styles.fadeOverlay}>
              <div className={`mono-accent ${styles.expandPrompt}`}>
                <Maximize2 size={13} className={styles.promptIcon} />
                <span>CLICK TO EXPAND</span>
              </div>
            </div>
          )}
        </div>

        {isExpanded && (
          <div className={styles.expandedControls}>
            <button
              type="button"
              className={`mono-accent ${styles.minimizeBtn}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
              aria-label="Click to minimize image"
            >
              <Minimize2 size={13} className={styles.promptIcon} />
              <span>CLICK TO MINIMIZE</span>
            </button>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className={`mono-accent ${styles.figcaption}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ExpandableImage;

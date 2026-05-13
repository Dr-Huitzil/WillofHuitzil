import { useEffect } from 'react';

/**
 * Locks body scroll using the iOS-safe position:fixed technique.
 * Captures current scrollY at mount and restores it precisely on cleanup.
 * Use this in any modal or overlay that needs to prevent background scroll.
 */
export function useBodyScrollLock() {
  useEffect(() => {
    const scrollY = window.scrollY;

    Object.assign(document.body.style, {
      overflow: 'hidden',
      position: 'fixed',
      top: `-${scrollY}px`,
      width: '100%',
    });

    return () => {
      Object.assign(document.body.style, {
        overflow: '',
        position: '',
        top: '',
        width: '',
      });
      // Using the options object with behavior: 'instant' explicitly overrides
      // the smooth scroll behavior defined in index.css for this specific jump.
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: 'instant'
      });
    };
  }, []);
}

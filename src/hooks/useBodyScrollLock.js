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
      // Restore exact scroll position — must happen after styles are cleared
      window.scrollTo(0, scrollY);
    };
  }, []);
}

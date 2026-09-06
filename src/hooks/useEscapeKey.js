import { useEffect } from 'react';

/**
 * Fires `onClose` whenever the Escape key is pressed.
 * Attach to any modal or overlay. Automatically cleans up on unmount.
 *
 * @param {() => void} onClose - Callback invoked on Escape keydown.
 */
export function useEscapeKey(onClose) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
}

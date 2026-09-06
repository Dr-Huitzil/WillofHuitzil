// src/components/ui/ModalShell/ModalShell.jsx
// Shared portal wrapper that provides backdrop, close button, scroll-lock,
// and Escape-key handling for every modal in the app.
// Each modal supplies its own inner container via `children`.

import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import styles from './ModalShell.module.css';

/**
 * @param {object}   props
 * @param {() => void} props.onClose   - Callback to close the modal.
 * @param {string}   [props.ariaLabel] - Accessible label for the dialog.
 * @param {React.ReactNode} props.children - The modal inner container element.
 */
const ModalShell = ({ onClose, ariaLabel, children }) => {
  useBodyScrollLock();
  useEscapeKey(onClose);

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {/* Stop clicks inside children from bubbling to the backdrop */}
      <div onClick={(e) => e.stopPropagation()} className={styles.innerWrapper}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalShell;

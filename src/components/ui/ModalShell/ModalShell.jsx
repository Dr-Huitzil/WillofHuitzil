// src/components/ui/ModalShell/ModalShell.jsx
// Shared portal wrapper — provides backdrop, scroll-lock, and Escape handling.
// Render <ModalCloseButton onClose={onClose} /> inside your modal container
// (which must be position: relative) to get the correctly-anchored close button.

import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import styles from './ModalShell.module.css';

/**
 * Backdrop + behaviour wrapper. Does NOT render a close button itself —
 * use <ModalCloseButton> inside your modal container instead.
 *
 * @param {() => void} props.onClose   - Callback to close the modal.
 * @param {string}   [props.ariaLabel] - Accessible label for the dialog.
 * @param {React.ReactNode} props.children - The modal container element.
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
      {/* Stop clicks inside the modal from bubbling to the backdrop */}
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

/**
 * Shared close button — render this inside your modal's position:relative
 * container so position:absolute anchors correctly to the modal corners.
 *
 * @param {() => void} props.onClose - Callback to close the modal.
 */
export const ModalCloseButton = ({ onClose }) => (
  <button
    className={styles.closeBtn}
    onClick={onClose}
    aria-label="Close modal"
  >
    <X size={24} />
  </button>
);

export default ModalShell;

// src/components/ui/DropdownSelect/DropdownSelect.jsx
// Reusable dropdown that replaces the duplicate Filter and Sort dropdowns
// in BlogPage.jsx. Uses a forwardRef on the wrapper for outside-click detection.

import React, { forwardRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import styles from './DropdownSelect.module.css';

/**
 * @param {object}   props
 * @param {React.ReactNode} props.icon          - Icon rendered inside the trigger button.
 * @param {string}   props.label                - Static label prefix (e.g. "FILTER").
 * @param {string}   props.activeLabel          - Currently selected option label.
 * @param {boolean}  props.isActive             - True when a non-default option is selected.
 * @param {boolean}  props.isOpen               - Controls dropdown open state.
 * @param {() => void} props.onToggle           - Toggles open/closed state.
 * @param {string}   props.dropdownHeader       - Text shown at top of the menu.
 * @param {Array<{id: string, label: string}>} props.options - List of selectable options.
 * @param {string}   props.selectedId           - Currently selected option id.
 * @param {(id: string) => void} props.onSelect - Called when an option is clicked.
 * @param {React.Ref} ref                       - Forwarded ref for outside-click detection.
 */
const DropdownSelect = forwardRef(function DropdownSelect(
  { icon, label, activeLabel, isActive, isOpen, onToggle, dropdownHeader, options, selectedId, onSelect },
  ref
) {
  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={`${styles.btn} ${isActive ? styles.btnActive : ''} mono-accent`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={styles.btnIcon}>{icon}</span>
        <span>
          {label}: <strong className={styles.activeValue}>{activeLabel}</strong>
        </span>
        <ChevronDown
          size={14}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu} role="listbox">
          <div className={styles.menuHeader}>{dropdownHeader}</div>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              role="option"
              aria-selected={selectedId === option.id}
              className={`${styles.item} ${selectedId === option.id ? styles.itemActive : ''}`}
              onClick={() => onSelect(option.id)}
            >
              <span>{option.label}</span>
              {selectedId === option.id && (
                <Check size={14} className={styles.checkIcon} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export default DropdownSelect;

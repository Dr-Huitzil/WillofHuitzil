// src/utils/getStatusStyle.js
// Shared ticket-status utilities used by CurrentWork and TicketModal.
// Eliminates the duplicated getStatusIcon() function and repeated slug logic.

import React from 'react';
import {
  Clock,
  CheckCircle2,
  CircleDashed,
  TerminalSquare,
  AlertCircle,
} from 'lucide-react';

/**
 * Returns the icon component for a given ticket status string.
 *
 * @param {string} status - The raw status string (e.g. "Working on...").
 * @param {number} [size=12] - Icon size in pixels.
 * @returns {React.ReactElement}
 */
export const getStatusIcon = (status, size = 12) => {
  switch (status.toLowerCase()) {
    case 'working on...': return <Clock size={size} />;
    case 'completed':     return <CheckCircle2 size={size} />;
    case 'closed':        return <AlertCircle size={size} />;
    case 'planning':      return <CircleDashed size={size} />;
    default:              return <TerminalSquare size={size} />;
  }
};

/**
 * Converts a status string to a CSS-safe slug for dynamic className lookups.
 * e.g. "Working on..." → "working-on"
 *
 * @param {string} status
 * @returns {string}
 */
export const getStatusSlug = (status) =>
  status.toLowerCase().replace(/\s+/g, '-').replace(/\.+/g, '');

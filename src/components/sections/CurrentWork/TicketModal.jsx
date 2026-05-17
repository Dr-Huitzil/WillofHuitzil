import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Clock, CheckCircle2, CircleDashed, TerminalSquare, AlertCircle } from 'lucide-react';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { renderMarkdown } from '../../../utils/renderMarkdown';
import styles from './TicketModal.module.css';

const TicketModal = ({ ticket, onClose }) => {
  // Lock body scroll on iOS & modern desktop browsers
  useBodyScrollLock();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!ticket) return null;

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'working on...': return <Clock size={16} />;
      case 'completed': return <CheckCircle2 size={16} />;
      case 'closed': return <AlertCircle size={16} />;
      case 'planning': return <CircleDashed size={16} />;
      default: return <TerminalSquare size={16} />;
    }
  };

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className={styles.header}>
          <div className={styles.metaRow}>
            <span className={styles.id}>{ticket.id}</span>
            <span className={`${styles.status} mono-accent`}>
              {getStatusIcon(ticket.status)}
              {ticket.status.toUpperCase()}
            </span>
          </div>
          <h2 className={`serif-header ${styles.title}`}>{ticket.title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className="mono-accent">SUMMARY</h4>
            <p className={styles.description}>{ticket.description}</p>
          </div>

          {/* Static Read-Only Tasks List (controlled by code in tickets.js) */}
          {ticket.tasks && ticket.tasks.length > 0 && (
            <div className={styles.section}>
              <h4 className="mono-accent">TASKS & GOALS</h4>
              <div className={styles.taskList}>
                {ticket.tasks.map(task => (
                  <div key={task.id} className={styles.taskContainer}>
                    <div className={styles.taskItem}>
                      <span className={`${styles.taskCustomBox} ${task.completed ? styles.checked : ''}`} />
                      <span className={`${styles.taskText} ${task.completed ? styles.completedTaskText : ''}`}>
                        {task.text}
                        {task.completed && task.completedAt && (
                          <span className={styles.completedAt}>
                            (Completed on {task.completedAt})
                          </span>
                        )}
                      </span>
                    </div>
                    {task.subtasks && task.subtasks.length > 0 && (
                      <div className={styles.subtaskList}>
                        {task.subtasks.map((subtask, idx) => (
                          <div key={idx} className={styles.subtaskItem}>
                            <span className={`${styles.subtaskCustomBox} ${subtask.completed ? styles.checked : ''}`} />
                            <span className={`${styles.subtaskText} ${subtask.completed ? styles.completedSubtaskText : ''}`}>
                              {subtask.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.section}>
            <h4 className="mono-accent">TECHNICAL DETAILS</h4>
            <div className={styles.longDetails}>
              {renderMarkdown(ticket.details)}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TicketModal;

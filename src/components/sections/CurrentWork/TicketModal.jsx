// src/components/sections/CurrentWork/TicketModal.jsx

import React from 'react';
import ModalShell, { ModalCloseButton } from '@/components/ui/ModalShell/ModalShell';
import { renderMarkdown } from '@/utils/renderMarkdown';
import { getStatusIcon, getStatusSlug } from '@/utils/getStatusStyle.jsx';
import styles from './TicketModal.module.css';

const TicketModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <ModalShell onClose={onClose} ariaLabel={ticket.title}>
      <div className={styles.modal}>
        <ModalCloseButton onClose={onClose} />
        <div className={styles.header}>
          <div className={styles.metaRow}>
            <span className={`${styles.id} ${styles[getStatusSlug(ticket.status)] || ''}`}>
              {ticket.id}
            </span>
            <span className={`${styles.status} ${styles[getStatusSlug(ticket.status)] || ''} mono-accent`}>
              {getStatusIcon(ticket.status, 16)}
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
    </ModalShell>
  );
};

export default TicketModal;

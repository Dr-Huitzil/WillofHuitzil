import React, { useState, useEffect, useRef } from 'react';
import styles from './CurrentWork.module.css';
import TicketModal from './TicketModal';
import { Filter, Clock, CheckCircle2, CircleDashed, TerminalSquare, AlertCircle, ChevronDown } from 'lucide-react';

const CurrentWork = ({ tickets = [] }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const filterRef = useRef(null);

  // Extract all unique statuses
  const allStatuses = Array.from(new Set(tickets.map(t => t.status)));

  // Initial state: hide "Closed" and "Completed" by default
  const [selectedStatuses, setSelectedStatuses] = useState(() =>
    allStatuses.filter(s => s.toLowerCase() !== 'closed' && s.toLowerCase() !== 'completed')
  );

  // Close filter dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!tickets || tickets.length === 0) return null;

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'working on...': return <Clock size={12} />;
      case 'completed': return <CheckCircle2 size={12} />;
      case 'closed': return <AlertCircle size={12} />;
      case 'planning': return <CircleDashed size={12} />;
      default: return <TerminalSquare size={12} />;
    }
  };

  const toggleStatus = (status) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const filteredTickets = tickets.filter(ticket => selectedStatuses.includes(ticket.status));

  return (
    <section className={styles.currentWorkSection} id="current-work">
      <div className={styles.sectionHeader}>
        <div>
          <div className="pill section-pill">
            CONSOLE
          </div>
          <h2 className="serif-header serif-glow section-title">Work In Progress</h2>
        </div>

        {/* Filter Dropdown Menu */}
        <div className={styles.filterWrapper} ref={filterRef}>
          <button
            className={`${styles.filterBtn} mono-accent`}
            onClick={() => setOpenFilter(!openFilter)}
            aria-haspopup="true"
            aria-expanded={openFilter}
          >
            <Filter size={14} />
            FILTER_STATUS
            <ChevronDown size={14} className={`${styles.chevron} ${openFilter ? styles.open : ''}`} />
          </button>

          {openFilter && (
            <div className={styles.filterDropdown}>
              <div className={styles.dropdownHeader}>Select Statuses</div>
              {allStatuses.map(status => {
                const isChecked = selectedStatuses.includes(status);
                return (
                  <label key={status} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleStatus(status)}
                      className={styles.checkboxInput}
                    />
                    <span className={styles.checkboxCustom} />
                    <span className={styles.statusLabelName}>
                      {getStatusIcon(status)}
                      {status}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className={styles.consoleContainer}>
        {/* Table View (Desktop & Tablet) */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="mono-accent">TICKET_ID</th>
                <th className="mono-accent">TITLE</th>
                <th className="mono-accent">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.length > 0 ? (
                filteredTickets.map(ticket => (
                  <tr
                    key={ticket.id}
                    className={styles.row}
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <td className={styles.idCell}>{ticket.id}</td>
                    <td className={styles.titleCell} title={ticket.title}>
                      <span className={styles.truncatedTitle}>{ticket.title}</span>
                    </td>
                    <td className={styles.statusCell}>
                      <span className={`${styles.statusPill} ${styles[ticket.status.toLowerCase().replace(/\s+/g, '-').replace(/\.+/g, '')] || ''}`}>
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className={styles.emptyCell}>
                    NO_ACTIVE_TICKETS_FOUND
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View Card List (Graceful Cascade) */}
        <div className={styles.mobileList}>
          {filteredTickets.length > 0 ? (
            filteredTickets.map(ticket => (
              <div
                key={ticket.id}
                className={styles.mobileCard}
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className={styles.mobileCardHeader}>
                  <span className={styles.mobileId}>{ticket.id}</span>
                  <span className={styles.mobileStatus}>
                    {getStatusIcon(ticket.status)}
                    {ticket.status}
                  </span>
                </div>
                <h4 className={styles.mobileTitle}>{ticket.title}</h4>
              </div>
            ))
          ) : (
            <div className={styles.emptyCell}>NO_ACTIVE_TICKETS_FOUND</div>
          )}
        </div>
      </div>

      {selectedTicket && (
        <TicketModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </section>
  );
};

export default CurrentWork;

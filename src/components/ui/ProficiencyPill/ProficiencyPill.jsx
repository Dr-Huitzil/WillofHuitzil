import React from 'react';
import styles from './ProficiencyPill.module.css';

const ProficiencyPill = ({ name }) => {
  return (
    <span className={`${styles.profPill} mono-accent`}>{name}</span>
  );
};

export default ProficiencyPill;

import React from 'react';
import { Leaf } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logoIcon}>
          <Leaf size={18} color="var(--accent-teal-bright)" />
        </div>
      </div>
      
      <div className={`${styles.navbarRight} mono-accent`}>
        <a href="#home">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#timeline">TIMELINE</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;

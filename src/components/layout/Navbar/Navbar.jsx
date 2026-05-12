import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.logoIcon}>
          <Leaf size={18} color="var(--accent-teal-bright)" />
        </div>
      </div>
      
      <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={24} color="var(--accent-teal-bright)" /> : <Menu size={24} color="var(--accent-teal-bright)" />}
      </button>

      <div className={`${styles.navbarRight} ${isOpen ? styles.open : ''} mono-accent`}>
        <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
        <a href="#timeline" onClick={() => setIsOpen(false)}>TIMELINE</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;

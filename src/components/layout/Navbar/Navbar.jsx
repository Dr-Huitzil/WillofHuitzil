import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToTarget(targetId);
      }, 100); // small delay to let DOM render
    } else {
      scrollToTarget(targetId);
    }
  };
  
  const scrollToTarget = (targetId) => {
    if (targetId === 'main') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/blog');
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div 
          className={styles.logoIcon}
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          style={{ cursor: 'pointer' }}
          aria-label="Home"
        >
          <Leaf size={24} color="var(--accent-teal-bright)" strokeWidth={1.5} />
        </div>
      </div>

      <div className={`${styles.navbarRight} ${isOpen ? styles.open : ''} mono-accent`}>
        <a href="#main" onClick={(e) => handleNavClick(e, 'main')}>MAIN</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>PROJECTS</a>
        <a href="/blog" onClick={handleBlogClick} className={location.pathname === '/blog' ? styles.activeNav : ''}>BLOG</a>
        <a href="#timeline" onClick={(e) => handleNavClick(e, 'timeline')}>TIMELINE</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a>
      </div>

      <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X color="var(--accent-teal-bright)" /> : <Menu color="var(--accent-teal-bright)" />}
      </button>
    </nav>
  );
};

export default Navbar;

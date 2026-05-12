import React from 'react';
import { Leaf } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-icon">
          <Leaf size={18} color="var(--accent-teal-bright)" />
        </div>
      </div>
      
      <div className="navbar-right mono-accent">
        <a href="#home">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#timeline">TIMELINE</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;

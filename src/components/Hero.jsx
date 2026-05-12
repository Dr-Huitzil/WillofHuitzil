import React from 'react';
import { Sun, GitBranch, Briefcase, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        
        <h1 className="serif-header serif-glow hero-title">
          Ivan<br/>Alier-Reyes
        </h1>
        
        <p className="mono-accent hero-subtitle">
          FULL STACK ARCHITECT // IT PROFESSIONAL
        </p>

        <div className="hero-descend">

          <div className="descend-links">
            <a href="https://github.com/ivan-alier-reyes" target="_blank" rel="noreferrer">
              <GitBranch size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Briefcase size={20} />
            </a>
            <a href="#resume">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

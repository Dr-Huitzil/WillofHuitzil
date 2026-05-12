import React from 'react';
import { Leaf, GitBranch, Briefcase, FileText, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo-icon-small">
          <Leaf size={14} color="var(--accent-teal-bright)" />
        </div>
        <div className="footer-brand">
          <span className="serif-header footer-title">VIBRANT GROVE</span>
          <span className="mono-accent footer-sub">ARCHITECTURAL_ECO_LOGIC &copy; 2024</span>
        </div>
      </div>

      <div className="footer-center mono-accent">
        <a href="https://github.com/ivan-alier-reyes" target="_blank" rel="noreferrer">
          <GitBranch size={14} /> GITHUB
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Briefcase size={14} /> LINKEDIN
        </a>
        <a href="#resume">
          <FileText size={14} /> RESUME
        </a>
        <a href="mailto:hello@example.com">
          <Mail size={14} /> MESSAGE
        </a>
      </div>

      <div className="footer-right mono-accent">
      </div>
    </footer>
  );
};

export default Footer;

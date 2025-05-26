import React from 'react';
import { Github as GitHub, Linkedin, Code2, ArrowUp } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>ANISH</h3>
          <p>Computer Science Student & Developer</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/anish41338" target="_blank" rel="noopener noreferrer">
              <GitHub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anish-s-46399133a" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/Anish_41338" target="_blank" rel="noopener noreferrer">
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anish. All rights reserved.</p>
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span>ANISH</span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('experience')}>Experience</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('education')}>Education</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, FileText, Code2 } from 'lucide-react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (title && subtitle) {
      title.classList.add('animate-in');
      
      setTimeout(() => {
        subtitle.classList.add('animate-in');
      }, 400);
    }
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 ref={titleRef}>
            <span className="greeting">Hello, I'm</span>
            <span className="name">ANISH</span>
          </h1>
          <h2 ref={subtitleRef}>Computer Science Student & Developer</h2>
          <p className="tagline">Passionate about creating innovative solutions through code</p>
          
          <div className="hero-cta">
            <button className="primary-btn" onClick={handleContactClick}>
              Get In Touch
            </button>
            <a 
              href="#projects" 
              className="secondary-btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-social">
          <a href="https://github.com/anish41338" target="_blank" rel="noopener noreferrer" className="social-icon">
            <GitHub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/anish-s-46399133a" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={22} />
          </a>
          <a href="https://leetcode.com/u/Anish_41338" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Code2 size={22} />
          </a>
          <a href="#" className="social-icon" title="Download Resume">
            <FileText size={22} />
          </a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
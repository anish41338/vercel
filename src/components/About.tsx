import React, { useEffect, useRef } from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <div className="avatar-placeholder">
              <User size={80} />
            </div>
          </div>
        </div>
        
        <div className="about-text">
          <p>
            Computer Science student at RV College of Engineering with interest in DSA, OOPs, and full-stack development. 
            Proficient in Python, C, HTML, CSS and JavaScript. Passionate about solving real-world problems, with a goal 
            of becoming an SDE at a top tech company.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <MapPin size={18} />
              <span>154/2, RV Layout, Bengaluru-560059</span>
            </div>
            <div className="detail-item">
              <Mail size={18} />
              <span>anishsihag12@gmail.com</span>
            </div>
            <div className="detail-item">
              <Phone size={18} />
              <span>+91 9104123566</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
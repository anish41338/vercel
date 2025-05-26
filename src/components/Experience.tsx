import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import '../styles/Experience.css';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isLeft?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  description,
  isLeft = false
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <div className="timeline-date">{period}</div>
        <h3 className="timeline-title">{title}</h3>
        <h4 className="timeline-company">{company}</h4>
        <ul className="timeline-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
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
      { threshold: 0.1 }
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
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Work Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="timeline">
        <div className="timeline-icon">
          <Briefcase size={24} />
        </div>
        
        <ExperienceItem
          title="Frontend Intern"
          company="Teller Loop, Teller Technologies Pvt Ltd."
          period="2025 - Present"
          description={[
            "Maintained and enhanced the user interface for a pod-based hospital transport system.",
            "Collaborated with the hardware team for seamless hardware-software integration.",
            "Utilized MQTT and WebSockets for low-latency, real-time communication."
          ]}
          isLeft={true}
        />
        
        <ExperienceItem
          title="Junior HR"
          company="Frequency Club, RVCE"
          period="2024 - Present"
          description={[
            "Coordinated recruitment and team-building activities.",
            "Managed internal communications and event planning."
          ]}
        />
        
        <ExperienceItem
          title="Web Development Wing"
          company="Accelerate Club, RVCE"
          period="2025 - Present"
          description={[
            "Contributed to club website development and maintenance.",
            "Participated in web development workshops and hackathons."
          ]}
          isLeft={true}
        />
        
        <ExperienceItem
          title="Club Representative"
          company="Rotaract Club, RVCE"
          period="2023 - Present"
          description={[
            "Organized community service events and represented the club.",
            "Participated in blood donation drive and club food drive; supported various initiatives."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
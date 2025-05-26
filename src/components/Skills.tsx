import React, { useEffect, useRef } from 'react';
import { Code, Database, Laptop, Monitor, Languages, Users } from 'lucide-react';
import '../styles/Skills.css';

interface SkillProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level}%`;
              }
            }, 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current?.parentElement) {
      observer.observe(barRef.current.parentElement);
    }

    return () => {
      if (barRef.current?.parentElement) {
        observer.unobserve(barRef.current.parentElement);
      }
    };
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div ref={barRef} className="skill-progress" style={{ width: '0%' }}></div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <div className="skill-card-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Skills</h2>
        <div className="underline"></div>
      </div>

      <div className="skills-container">
        <div className="skill-bars">
          <SkillBar name="Python" level={90} />
          <SkillBar name="C" level={85} />
          <SkillBar name="HTML/CSS" level={80} />
          <SkillBar name="JavaScript" level={75} />
          <SkillBar name="Flutter/Dart" level={70} />
          <SkillBar name="MySQL" level={65} />
        </div>

        <div className="skill-cards">
          <SkillCard 
            title="Programming Languages" 
            icon={<Code size={24} />}
            skills={["Python", "C", "JavaScript", "MATLAB (basic)", "R (basic)"]}
          />
          <SkillCard 
            title="Web Development" 
            icon={<Monitor size={24} />}
            skills={["HTML", "CSS", "JavaScript"]}
          />
          <SkillCard 
            title="Mobile Development" 
            icon={<Laptop size={24} />}
            skills={["Flutter", "Dart"]}
          />
          <SkillCard 
            title="Database" 
            icon={<Database size={24} />}
            skills={["MySQL"]}
          />
          <SkillCard 
            title="Languages" 
            icon={<Languages size={24} />}
            skills={["English (Fluent)", "Hindi (Fluent)"]}
          />
          <SkillCard 
            title="Soft Skills" 
            icon={<Users size={24} />}
            skills={["Teamwork", "Problem Solving", "Time Management", "Leadership"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
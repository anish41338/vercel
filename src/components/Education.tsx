import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import '../styles/Education.css';

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  institution, 
  degree, 
  period, 
  gpa, 
  achievements 
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
    <div ref={itemRef} className="education-item">
      <div className="education-icon">
        <GraduationCap size={32} />
      </div>
      <div className="education-content">
        <h3>{institution}</h3>
        <p className="education-degree">{degree}</p>
        <p className="education-period">{period}</p>
        {gpa && <p className="education-gpa">{gpa}</p>}
        {achievements && achievements.length > 0 && (
          <div className="education-achievements">
            <h4>Achievements</h4>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
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
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Education</h2>
        <div className="underline"></div>
      </div>

      <div className="education-container">
        <EducationItem
          institution="RV College of Engineering"
          degree="Bachelor of Engineering in Computer Science"
          period="2023 - 2027"
          gpa="GPA: 9.8/10"
          achievements={[
            "Member of IEEE Computer Society",
            "Participated in ACM Tech Tack Hackathon 2025",
            "Participated in JSS Hackathon 2025"
          ]}
        />
        
        <EducationItem
          institution="Kendriya Vidyalaya"
          degree="Higher Secondary Education"
          period="2012 - 2021"
          gpa="10th: 98%, 12th: 95.6%"
          achievements={[
            "Took part in 'Auction to Analysis' by IEEE RVCE",
            "Participated in Code Clash Quiz"
          ]}
        />
      </div>

      <div className="certifications">
        <div className="certifications-header">
          <Award size={24} />
          <h3>Extracurricular Activities</h3>
        </div>
        <ul className="certifications-list">
          <li>Participated in JSS Hackathon 2025, ACM Tech Tack Hackathon 2025 and Code Clash Quiz</li>
          <li>Took part in "Auction to Analysis" by IEEE RVCE</li>
          <li>Member of IEEE Computer Society</li>
          <li>Participated in college-level hackathons and dev events</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Women's Safety App",
    description: "A Flutter-based mobile application focused on women's safety with features like emergency contacts, location sharing, and safety alerts.",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    github: "https://github.com/anish41338/womens-safety-app"
  },
  {
    title: "Skill-sharing App",
    description: "A platform where users can share their skills and learn from others, connecting people with complementary learning needs.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    github: "https://github.com/anish41338/skill-sharing-app"
  },
  {
    title: "File Compression Tool",
    description: "A C-based file compression utility implementing Huffman coding algorithm to efficiently compress and decompress files.",
    image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["C", "Data Structures", "Algorithms", "File I/O"],
    github: "https://github.com/anish41338/file-compression-tool"
  },
  {
    title: "Teller Loop",
    description: "An industrial project for a pod-based hospital transport system with a responsive front-end interface for monitoring and control.",
    image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["JavaScript", "React", "MQTT", "WebSockets"],
    github: "https://github.com/anish41338/teller-loop"
  },
  {
    title: "YoloV5 Obstacle Detection",
    description: "An implementation of YOLOv5 for real-time obstacle detection in autonomous systems, trained on custom datasets.",
    image: "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "PyTorch", "Computer Vision", "YOLOv5"],
    github: "https://github.com/anish41338/yolov5-obstacle-detection"
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  live 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="project-overlay">
          <div className="project-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
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

  const showMoreProjects = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 3, projects.length));
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>

      <div className="projects-container">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={showMoreProjects}>
            Show More <ArrowRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
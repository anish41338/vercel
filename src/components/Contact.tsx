import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; isError: boolean } | null>(null);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isError: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any questions or opportunities.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <div>
                <h4>Email</h4>
                <p>anishsihag12@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" size={20} />
              <div>
                <h4>Phone</h4>
                <p>+91 9104123566</p>
              </div>
            </div>
            
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <div>
                <h4>Location</h4>
                <p>154/2, RV Layout, Bengaluru-560059</p>
              </div>
            </div>
          </div>
          
          <div className="contact-social">
            <a href="https://www.linkedin.com/in/anish-s-46399133a" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/anish41338" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://leetcode.com/u/Anish_41338" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
            
            {formStatus && (
              <div className={`form-status ${formStatus.isError ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
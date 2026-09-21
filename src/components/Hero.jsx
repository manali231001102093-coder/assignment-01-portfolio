import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Hi there, I'm</span>
          <h1 className="hero-title">
            John Doe
            <span className="hero-subtitle">Software Engineer</span>
          </h1>
          <p className="hero-description">
            I build exceptional and accessible digital experiences for the web. 
            Currently focused on building responsive front-end applications with React.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:hello@example.com">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-shape"></div>
          <img 
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Developer workspace" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

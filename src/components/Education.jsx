import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2024 - 2026",
      location: "San Francisco, CA",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with Honors."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State College",
      period: "2020 - 2024",
      location: "Austin, TX",
      description: "Minor in Mathematics. Relevant coursework included Data Structures, Algorithms, and Web Development."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              <div className="timeline-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <div className="timeline-meta">
                  <span><Calendar size={16} /> {edu.period}</span>
                  <span><MapPin size={16} /> {edu.location}</span>
                </div>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

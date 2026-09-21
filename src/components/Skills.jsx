import React from 'react';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={32} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={32} />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code2 size={32} />,
      skills: [
        { name: "JavaScript/TS", level: 85 },
        { name: "Python", level: 75 },
        { name: "Java", level: 60 },
        { name: "C++", level: 50 }
      ]
    },
    {
      title: "Other Tools",
      icon: <Smartphone size={32} />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Galgotias University',
      year: '2023 - 2027',
      description: 'Specialized in Artificial Intelligence and Machine Learning.'
    },
    {
      id: 2,
      degree: 'Certification in Computer Science',
      institution: 'Harvard University(Online)',
      year: '2024 - 2025',
      description: 'Foundational course in computer science covering algorithms, data structures, software engineering, and web development with C, Python, SQL, and JavaScript.'
    },
    {
      id: 3,
      degree: 'Higher School & Intermediate',
      institution: 'Govt. Sarvodaya Bal Vidyalaya (Prem Chand)',
      year: '2021 - 2023',
      description: 'Studied Physics, Chemistry, and Mathematics (PCM), building problem-solving and analytical skills.'
    }
  ];

  const skills = [
    { id: 1, name: 'Frontend Development', percentage: 75 },
    { id: 2, name: 'Backend Development', percentage: 80 },
    { id: 3, name: 'SQL & Databases', percentage: 65 },
    { id: 4, name: 'Machine Learning', percentage: 70 },
    { id: 5, name: 'Cloud Services', percentage: 60 }
  ];

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        
        <div className="resume-content">
          <div className="resume-column full-width">
            <div className="resume-heading">
              <FaGraduationCap />
              <h3>Education</h3>
            </div>
            
            {education.map((item) => (
              <motion.div 
                key={item.id} 
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
              >
                <h4>{item.degree}</h4>
                <h5>{item.year}</h5>
                <p className="institution">{item.institution}</p>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="skills-section">
          <div className="resume-heading">
            <FaCode />
            <h3>Skills</h3>
          </div>
          
          <div className="skills-container">
            {skills.map((skill) => (
              <motion.div 
                key={skill.id} 
                className="skill-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              >
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
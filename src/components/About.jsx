import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaPalette } from 'react-icons/fa';
// Fix the profile placeholder import
// import profilePlaceholder from '../assets/images/profile-placeholder';
import '../styles/About.css';

const About = () => {
  const skills = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.'
    },
    {
      id: 2,
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Node.js, Express, Django, and Flask.'
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Creating efficient database schemas and writing optimized queries for SQL and NoSQL databases.'
    },
    {
      id: 4,
      icon: <FaPalette />,
      title: 'Canva Designing',
      description: 'Creating visually appealing graphics, presentations, and social media content using Canva design tools.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              paddingTop: "100px"
            }}
          >
            {/* Profile image */}
            <img 
              src={require("../assets/images/Boy emoji _ AI Emoji Generator.jpg")} 
              alt="Sachin Manral" 
              className="profile-image"
              style={{ 
                borderRadius: "30px", 
                border: "4px solid #64ffda",
                maxWidth: "240px",
                height: "220px",
                objectFit: "cover",
                objectPosition: "center 40%",
                width: "100%",
                margin: "0 auto",
                display: "block",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Who am I?</h3>
            <p>
            I'm Sachin Manral, a BTech CSE (AI & ML) student at Galgotias University, Greater Noida, with a deep passion for AI, full-stack development, and emerging technologies. I enjoy building scalable, intelligent, and user-friendly applications while continuously exploring advancements in the tech world.
            </p>
            <p>
            My journey in software development started with a curiosity about how AI and machine learning can transform industries. Since then, I have been actively learning and working with various programming languages, frameworks, and cloud technologies to enhance my skills.
            </p>
            <p>
            I believe in writing clean, maintainable code and staying up to date with the latest innovations in AI and software engineering. When I'm not coding, you'll find me exploring AI research, reading tech blogs, or experimenting with new programming paradigms.
            </p>
          </motion.div>
        </div>
        
        <div className="skills-overview">
          <h3>What I do</h3>
          
          <div className="skills-grid">
            {skills.map((skill) => (
              <motion.div 
                key={skill.id} 
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
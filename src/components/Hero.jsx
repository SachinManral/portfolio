import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <h1>Sachin Manral</h1>
            <h2>Software Engineer</h2>
            <p>
              I'm a passionate software engineer with expertise in full-stack development,
              machine learning, and cloud technologies. I love building innovative solutions
              that solve real-world problems and create meaningful user experiences.
            </p>
            <div className="hero-buttons">
              <button onClick={() => handleNavigation('/portfolio')} className="btn-primary">View My Work</button>
              <button onClick={() => handleNavigation('/contact')} className="btn-secondary">Contact Me</button>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image" style={{ 
              maxWidth: "280px", 
              height: "280px",
              margin: "0 auto",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #64ffda",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)"
            }}>
              <img 
                src={require("../assets/images/download (1).jpg")} 
                alt="Sachin Manral"
                style={{ 
                  width: "100%", 
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="personal-info" style={{ marginTop: "25px" }}>
              <div className="info-item">
                <FaEnvelope />
                <span>sachinmanral2431@gmail.com</span>
              </div>
              <div className="info-item">
                <FaPhone />
                <span>+91 9548904582</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>New Delhi, India</span>
              </div>
              <div className="info-item">
                <FaBirthdayCake />
                <span>January 31, 2004</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
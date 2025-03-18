import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Portfolio.css';
// Keep the working image import
import echocartImage from '../assets/images/echocartshop.png';
// Update import to match the exact filename
import portfolioImage from '../assets/images/portfolioimage.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-development',
      // This approach works for the first image
      image: echocartImage,
      description: 'A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion', 'ShadCN UI'],
      github: 'https://github.com/SachinManral/echocart',
      demo: 'https://echocartshop.netlify.app'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'web-design',
      // Use the imported portfolio image
      image: portfolioImage,
      description: 'A modern portfolio website built with React, featuring smooth animations and responsive design.',
      technologies: ['React', 'CSS', 'Framer Motion', 'React Router'],
      github: 'https://github.com/SachinManral/portfolio',
      demo: 'https://sachinmanral.netlify.app'
    }
    // Projects with IDs 3-6 have been removed
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="portfolio-filter">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'web-development' ? 'active' : ''} 
            onClick={() => setFilter('web-development')}
          >
            Web Development
          </button>
          <button 
            className={filter === 'web-design' ? 'active' : ''} 
            onClick={() => setFilter('web-design')}
          >
            Web Design
          </button>
          <button 
            className={filter === 'applications' ? 'active' : ''} 
            onClick={() => setFilter('applications')}
          >
            Applications
          </button>
          <button 
            className={filter === 'machine-learning' ? 'active' : ''} 
            onClick={() => setFilter('machine-learning')}
          >
            Machine Learning
          </button>
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
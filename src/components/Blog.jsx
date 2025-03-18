import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        
        <motion.div 
          className="blog-coming-soon"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="coming-soon-icon">
            <FaPencilAlt />
          </div>
          <h3>Blog Coming Soon</h3>
          <p>I'm currently working on some interesting articles about web development, technology trends, and programming best practices.</p>
          <p>Check back soon for insightful content!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
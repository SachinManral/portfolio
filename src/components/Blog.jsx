import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2023',
      excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development, from WebAssembly to JAMstack architecture.',
      image: 'https://via.placeholder.com/800x500/252525/64ffda?text=Web+Development+Trends',
      date: 'June 15, 2023',
      author: 'Sachin Manral',
      link: '/blog/web-development-trends'
    },
    {
      id: 2,
      title: 'Building Scalable Applications with Microservices',
      excerpt: 'Learn how to design, implement, and deploy microservices architecture to create highly scalable and maintainable applications.',
      image: 'https://via.placeholder.com/800x500/252525/64ffda?text=Microservices',
      date: 'May 22, 2023',
      author: 'Sachin Manral',
      link: '/blog/microservices'
    },
    {
      id: 3,
      title: 'Machine Learning for Developers: A Practical Guide',
      excerpt: 'A comprehensive introduction to machine learning concepts and techniques for software developers, with practical examples and code snippets.',
      image: 'https://via.placeholder.com/800x500/252525/64ffda?text=Machine+Learning',
      date: 'April 10, 2023',
      author: 'Sachin Manral',
      link: '/blog/machine-learning-guide'
    },
    {
      id: 4,
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Discover advanced techniques to improve the performance of your React applications, from code splitting to memoization and virtualization.',
      image: 'https://via.placeholder.com/800x500/252525/64ffda?text=React+Performance',
      date: 'March 5, 2023',
      author: 'Sachin Manral',
      link: '/blog/react-performance'
    }
  ];

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><FaCalendarAlt /> {post.date}</span>
                  <span><FaUser /> {post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="/blog" className="btn-primary">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
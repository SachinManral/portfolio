import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CTO, Tech Innovations',
      image: 'https://via.placeholder.com/100/252525/64ffda?text=JS',
      quote: 'Prakhar is an exceptional developer with a keen eye for detail. His ability to understand complex requirements and translate them into elegant solutions is remarkable.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Manager, DataViz',
      image: 'https://via.placeholder.com/100/252525/64ffda?text=SJ',
      quote: 'Working with Prakhar was a pleasure. He not only delivered high-quality code but also provided valuable insights that improved our product significantly.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Lead Developer, CloudScale',
      image: 'https://via.placeholder.com/100/252525/64ffda?text=MC',
      quote: 'Prakhar\'s expertise in both frontend and backend technologies made him an invaluable asset to our team. His solutions are always scalable, maintainable, and user-friendly.'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
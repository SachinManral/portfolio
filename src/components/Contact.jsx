import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully!'
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="info-item" style={{ display: "flex", alignItems: "center" }}>
              <div className="info-icon" style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                minWidth: "50px",
                lineHeight: "0"
              }}>
                <FaEnvelope size={20} color="#64ffda" />
              </div>
              <div className="info-content" style={{ marginLeft: "15px" }}>
                <h3>Email</h3>
                <p>sachinmanral2431@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item" style={{ display: "flex", alignItems: "center" }}>
              <div className="info-icon" style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                minWidth: "50px",
                lineHeight: "0"
              }}>
                <FaPhone size={20} color="#64ffda" />
              </div>
              <div className="info-content" style={{ marginLeft: "15px" }}>
                <h3>Phone</h3>
                <p>+91 9548904582</p>
              </div>
            </div>
            
            <div className="info-item" style={{ display: "flex", alignItems: "center" }}>
              <div className="info-icon" style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                minWidth: "50px",
                lineHeight: "0"
              }}>
                <FaMapMarkerAlt size={20} color="#64ffda" />
              </div>
              <div className="info-content" style={{ marginLeft: "15px" }}>
                <h3>Location</h3>
                <p>New Delhi, India</p>
              </div>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754352805!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1645189741742!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="location map"
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message <FaPaperPlane />
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Get the current path
  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              SM
            </motion.h1>
          </Link>
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li className={currentPath === 'home' ? 'active' : ''}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className={currentPath === 'about' ? 'active' : ''}>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className={currentPath === 'resume' ? 'active' : ''}>
              <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
            </li>
            <li className={currentPath === 'portfolio' ? 'active' : ''}>
              <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            </li>
            <li className={currentPath === 'blog' ? 'active' : ''}>
              <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li className={currentPath === 'contact' ? 'active' : ''}>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
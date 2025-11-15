// components/JS Header.js
import React, { useState, useEffect, useRef } from 'react';
import '../css/header.css';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const navbarRef = useRef(null);

  const phrases = [
    "Web Applications", 
    "E-commerce Solutions", 
    "Mobile Apps", 
    "UX/UI Design"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typewriter = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (typingForward) {
        if (charIndex <= currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setTypingForward(false), 2000);
        }
      } else {
        if (charIndex >= 0) {
          setTypedText(currentPhrase.substring(0, charIndex));
          setCharIndex(charIndex - 1);
        } else {
          setTypingForward(true);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingForward ? 100 : 50);

    return () => clearTimeout(typewriter);
  }, [charIndex, currentPhraseIndex, typingForward]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close mobile menu when clicking on link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Close mobile menu on resize if open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header 
      className={`header-section ${scrolled ? 'scrolled' : ''}`} 
      id="home"
      ref={headerRef}
    >
      {/* Navigation Bar */}
      <nav 
        ref={navbarRef}
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      >
        <div className="nav-container">
          <div className="nav-content">
            <a className="nav-brand" href="#home">
              <span className="brand-highlight">Dev</span>Inno.ai
            </a>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <ul className="nav-links">
                {['about', 'services', 'projects', 'team', 'contact'].map((section) => (
                  <li key={section} className="nav-item">
                    <a 
                      className="nav-link"
                      href={`#${section}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
              <button 
                className="btn contact-btn"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button 
              className={`nav-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`nav-mobile ${menuOpen ? 'nav-mobile-open' : ''}`}>
            <ul className="nav-mobile-links">
              {['about', 'services', 'projects', 'contact'].map((section) => (
                <li key={section} className="nav-mobile-item">
                  <a 
                    className="nav-mobile-link"
                    href={`#${section}`}
                    onClick={handleNavClick}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className="btn contact-btn-mobile"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                handleNavClick();
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Creating <span className="text-highlight">Innovative Solutions</span> for Your Business
              </motion.h1>
              
              <motion.div 
                className="typewriter-container"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="hero-subtitle">
                  We specialize in <span className="typed-text">{typedText}</span>
                  <span className="typed-cursor">|</span>
                </p>
              </motion.div>

              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <button 
                  className="btn btn-primary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Services
                </button>
              </motion.div>
            </div>
            
            {/* Geometric Animations Section */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-illustration">
                <div className="circle-animation"></div>
                <div className="cube-animation"></div>
                <div className="triangle-animation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
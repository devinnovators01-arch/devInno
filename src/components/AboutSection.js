// components/JS AboutSection.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

import '../css/about.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 50, suffix: '+', label: 'Successful Projects', icon: '🚀' },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { value: 24, suffix: '/7', label: 'Dedicated Support', icon: '🛡️' }
  ];

  const highlights = [
    {
      title: "Full-Stack Expertise",
      description: "End-to-end development from concept to deployment",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "UI/UX Focused",
      description: "Designs that prioritize user experience and engagement",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Scalable Solutions",
      description: "Future-proof applications that grow with your business",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Background Elements */}
      <div className="about-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
      </div>

      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <div className="about-text">
            <motion.div variants={itemVariants} className="section-header">
              <span className="section-badge">About Us</span>
              <h2 className="section-title">
                Crafting <span className="gradient-text">Digital Excellence</span> That Drives Business Growth
              </h2>
            </motion.div>
            
            <motion.p 
              className="lead-text"
              variants={itemVariants}
            >
              <strong>Dev Innovators</strong> is your premier partner for transforming innovative ideas into powerful digital solutions. We combine cutting-edge technology with strategic design to deliver exceptional results that propel your business forward.
            </motion.p>

            <motion.p
              className="description-text"
              variants={itemVariants}
            >
              Our team of passionate developers and designers work closely with you to understand your vision, 
              challenges, and goals. We believe in building partnerships, not just projects, ensuring every 
              solution we deliver exceeds expectations and drives measurable success.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div 
              className="highlights-grid"
              variants={containerVariants}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="highlight-gradient"></div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">{highlight.title}</h4>
                    <p className="highlight-description">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Visual Content */}
          <div className="about-visual">
            {/* Main Image */}
            <motion.div
              className="about-image-container"
              variants={itemVariants}
            >
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Our dedicated team collaborating on innovative digital solutions" 
                  className="main-image"
                />
                <div className="image-overlay"></div>
                
                {/* Floating Badge */}
                <motion.div 
                  className="experience-badge"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="badge-content">
                    <span className="badge-years">2+</span>
                    <span className="badge-text">Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="stats-section"
              ref={statsRef}
              variants={containerVariants}
            >
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-card"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <h3 className="stat-number">
                      {isVisible && (
                        <CountUp 
                          end={stat.value} 
                          suffix={stat.suffix} 
                          duration={2.5} 
                          delay={index * 0.2}
                        />
                      )}
                    </h3>
                    <p className="stat-label">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
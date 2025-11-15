// components/JS Services.js
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../css/services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const services = [
    {
      title: "Frontend Dev",
      description: "Responsive, interactive UIs with React, Vue, and Angular.",
      icon: "💻",
      features: ["React", "Vue.js", "Angular", "Responsive", "Performance"]
    },
    {
      title: "Backend Dev",
      description: "Server solutions with Node.js, Python, and Java.",
      icon: "⚙️",
      features: ["Node.js", "Python", "APIs", "Databases", "Security"]
    },
    {
      title: "Mobile App Dev",
      description: "Native and cross-platform apps for iOS & Android.",
      icon: "📱",
      features: ["React Native", "Flutter", "iOS", "Android", "App Store"]
    },
    {
      title: "Full Stack",
      description: "End-to-end web apps with seamless integration.",
      icon: "🔄",
      features: ["MERN Stack", "Next.js", "Deployment", "DevOps", "Testing"]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, beautiful interfaces that drive conversions.",
      icon: "🎨",
      features: ["Figma", "Prototyping", "User Research", "Wireframing", "Design"]
    },
    {
      title: "Web Maintenance",
      description: "Support, updates, and optimizations for smooth operation.",
      icon: "🔧",
      features: ["Performance", "Security", "Updates", "Backups", "Monitoring"]
    },
    {
      title: "Consulting",
      description: "Expert advice on tech stack and digital strategy.",
      icon: "💡",
      features: ["Architecture", "Strategy", "Code Review", "Best Practices", "Scalability"]
    }
  ];

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="services-main-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive solutions tailored to your business needs
          </p>
          <div className="header-divider"></div>
        </motion.div>

        {/* Horizontal Services Navigation */}
        <div className="services-horizontal">
          {/* Service Navigation */}
          <motion.div 
            className="service-navigation"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="nav-icon">{service.icon}</div>
                <span className="nav-title">{service.title}</span>
                <div className="nav-indicator"></div>
              </button>
            ))}
          </motion.div>

          {/* Service Content */}
          <motion.div 
            className="service-content-area"
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="service-content">
              <div className="service-main">
                <div className="service-icon-large">
                  {services[activeService].icon}
                </div>
                <h2 className="service-title">
                  {services[activeService].title}
                </h2>
                <p className="service-description">
                  {services[activeService].description}
                </p>
              </div>
              
              <div className="service-features">
                <h4 className="features-title">Key Features:</h4>
                <div className="features-grid">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-dot"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="cta-title">Ready to Start Your Project?</h3>
          <p className="cta-description">
            Let's discuss how we can bring your vision to life with our comprehensive development services.
          </p>
          <motion.button 
            className="cta-button"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(108, 99, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
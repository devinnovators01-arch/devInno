// components/Services.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/services.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);

  const services = [
    {
      title: "Frontend Development",
      description: "Responsive, interactive UIs with React, Vue, and Angular. We create modern, performant user interfaces that provide exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      features: ["React", "Vue.js", "Angular", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Backend Development",
      description: "Robust server solutions with Node.js, Python, and Java. We build scalable APIs and database architectures for your business needs.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      features: ["Node.js", "Python", "REST APIs", "Database Design", "Security"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS & Android. We deliver high-performance mobile applications with seamless user experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      features: ["React Native", "Flutter", "iOS Development", "Android Development", "App Store Deployment"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web applications with seamless integration. We handle both frontend and backend for complete digital solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ["MERN Stack", "Next.js", "Deployment", "DevOps", "Testing"]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, beautiful interfaces that drive conversions. We focus on user-centered design principles for maximum engagement.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      features: ["Figma", "Prototyping", "User Research", "Wireframing", "Visual Design"]
    },
    {
      title: "Web Maintenance",
      description: "Support, updates, and optimizations for smooth operation. We ensure your digital assets remain secure and performant.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      features: ["Performance", "Security Updates", "Regular Backups", "Monitoring", "Technical Support"]
    },
    {
      title: "IT Consulting",
      description: "Expert advice on tech stack and digital strategy. We help you make informed technology decisions for business growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      features: ["Architecture", "Strategy Planning", "Code Review", "Best Practices", "Scalability"]
    },
    {
      title: "Social Media Marketing",
      description: "Organic & paid campaigns, branding, and influencer marketing. We boost your online presence across all social platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      features: ["Organic Campaigns", "Paid Advertising", "Content Creation", "Brand Building", "Influencer Marketing"]
    },
    {
      title: "Business Development",
      description: "Strategic growth consulting and market expansion solutions. We help you identify new opportunities and drive revenue.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      features: ["Strategic Consulting", "Sales Support", "Market Expansion", "Lead Generation", "Growth Strategy"]
    },
    {
      title: "Marketing Consultancy",
      description: "Brand positioning, campaign strategy, and market research. We develop data-driven marketing strategies for success.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ["Brand Positioning", "Campaign Strategy", "Market Research", "Competitive Analysis", "ROI Optimization"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration. We build scalable e-commerce platforms that convert.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      features: ["Online Stores", "Payment Gateways", "Inventory Management", "Sales Analytics", "Mobile Commerce"]
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services. We help businesses leverage cloud technology for efficiency.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      features: ["Cloud Migration", "AWS/Azure", "Server Management", "DevOps", "Security"]
    },
    {
      title: "SEO Optimization",
      description: "Search engine optimization to improve visibility and drive organic traffic. We use proven strategies for higher rankings.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy", "Rank Tracking"]
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation and distribution. We create engaging content that attracts and retains your target audience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      features: ["Content Strategy", "Blog Writing", "Video Content", "Social Media", "Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul for traditional businesses. We help companies adapt to the digital age with modern solutions.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
      features: ["Digital Strategy", "Process Automation", "Technology Integration", "Change Management", "ROI Analysis"]
    }
  ];

  const handleCardClick = (index) => {
    if (window.innerWidth <= 768) {
      setClickedCard(clickedCard === index ? null : index);
    }
  };

  const handleCardHover = (index) => {
    if (window.innerWidth > 768) {
      setHoveredCard(index);
    }
  };

  const handleCardLeave = () => {
    if (window.innerWidth > 768) {
      setHoveredCard(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="services-main-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
          <div className="header-divider"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-container"
              variants={cardVariants}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(index)}
            >
              <div className={`service-card ${hoveredCard === index || clickedCard === index ? 'flipped' : ''}`}>
                {/* Front of Card - Only Image and Title */}
                <div className="card-front">
                  <div 
                    className="service-image"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="image-overlay"></div>
                    <h3 className="service-title-front">{service.title}</h3>
                  </div>
                </div>

                {/* Back of Card - Description and Features */}
                <div className="card-back">
                  <div className="card-back-content">
                    <h4 className="back-title">{service.title}</h4>
                    <p className="back-description">{service.description}</p>
                    
                    <div className="back-features">
                      <h5 className="features-title">What We Offer:</h5>
                      <ul className="features-list">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Close button for mobile */}
                    <button 
                      className="close-card-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setClickedCard(null);
                      }}

                      style={{backgroundColor: "#eeeeee",
    borderRadius: "15px",
    width: "100px",}}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="cta-title">Ready to Transform Your Digital Presence?</h3>
          <p className="cta-description">
            Let's discuss how our comprehensive web, app, and digital solutions can drive your business forward with cutting-edge technology and expertise.
          </p>
          <motion.button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
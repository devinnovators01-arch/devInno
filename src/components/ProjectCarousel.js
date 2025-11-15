// components/JS ProjectCarousel.js
import ecommerce1 from "../assets/imges/ecommerce1.png";
import ecommerce2 from "../assets/imges/ecommerce2.png";
import ecommerce3 from "../assets/imges/ecommerce3.png";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/project-carousel.css';

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and secure checkout.",
      detailedDescription: "This e-commerce platform was built with a modern tech stack to provide a seamless shopping experience. Features include product categorization, search functionality, user reviews, and a secure payment gateway integration. The admin dashboard allows for inventory management and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      images: [ecommerce1, ecommerce2, ecommerce3],
      liveDemoLink: "https://ecommercesite-pink-pi.vercel.app/",
      category: "Web Development",
      duration: "3 months"
    },
    {
      title: "Corporate Website",
      description: "A responsive website with CMS integration for easy content updates by the client.",
      detailedDescription: "The corporate website was designed with a clean, professional aesthetic that reflects the company's brand. The CMS integration allows non-technical staff to update content easily. The site features a blog section, contact form, and interactive elements to engage visitors.",
      technologies: ["WordPress", "JavaScript", "PHP", "MySQL"],
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      ],
      liveDemoLink: "#",
      category: "Web Design",
      duration: "2 months"
    },
    {
      title: "SaaS Application",
      description: "A subscription-based web application with user management and analytics dashboard.",
      detailedDescription: "This SaaS product offers tiered subscription plans with different feature sets. The application includes user authentication, role-based access control, and a comprehensive analytics dashboard. The backend processes large datasets efficiently to provide real-time insights.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      ],
      liveDemoLink: "#",
      category: "Web Application",
      duration: "4 months"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const openCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container-wide">
        {/* Header */}
        <motion.div 
          className="projects-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of our recent work that we're proud of</p>
        </motion.div>
        
        {/* Main Carousel - Expanded Width */}
        <div className="project-carousel">
          <div className="carousel-container-expanded">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="project-card-expanded"
            >
              <div className="project-grid-expanded">
                {/* Expanded Image Section */}
                <div className="project-image-section-expanded">
                  <div 
                    className="project-image-expanded"
                    style={{ 
                      backgroundImage: `url(${projects[activeIndex].images[0]})`
                    }}
                  >
                    <div className="project-overlay-expanded">
                      <button 
                        className="view-details-btn-expanded"
                        onClick={() => openCaseStudy(projects[activeIndex])}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        View Case Study
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="project-content-expanded">
                  <div className="project-meta">
                    <span className="project-category">{projects[activeIndex].category}</span>
                    <span className="project-duration">{projects[activeIndex].duration}</span>
                  </div>
                  
                  <h3 className="project-title-expanded">{projects[activeIndex].title}</h3>
                  <p className="project-description-expanded">{projects[activeIndex].description}</p>
                  
                  <div className="technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {projects[activeIndex].technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => openCaseStudy(projects[activeIndex])}
                    >
                      View Details
                    </button>
                    <a 
                      href={projects[activeIndex].liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Controls */}
            <div className="carousel-controls-expanded">
              <button 
                className="carousel-btn prev"
                onClick={prevSlide}
                aria-label="Previous project"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="carousel-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                className="carousel-btn next"
                onClick={nextSlide}
                aria-label="Next project"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCaseStudy}
            >
              <motion.div
                className="modal-content-expanded"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={closeCaseStudy}
                  aria-label="Close modal"
                >
                   <i className="fas fa-times"></i>
                </button>

                <div className="modal-grid-expanded">
                  <div className="modal-gallery-expanded">
                    <div className="main-image-expanded">
                      <img 
                        src={selectedProject.images[0]} 
                        alt={selectedProject.title}
                        className="img-fluid-expanded"
                      />
                    </div>
                    <div className="thumbnail-container-expanded">
                      {selectedProject.images.map((image, index) => (
                        <div 
                          key={index}
                          className="thumbnail-expanded"
                          onClick={() => {
                            const newImages = [...selectedProject.images];
                            const clickedImage = newImages.splice(index, 1)[0];
                            newImages.unshift(clickedImage);
                            setSelectedProject({
                              ...selectedProject,
                              images: newImages
                            });
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`}
                            className="img-fluid-expanded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-details-expanded">
                    <div className="project-header">
                      <div className="project-meta">
                        <span className="project-category">{selectedProject.category}</span>
                        <span className="project-duration">{selectedProject.duration}</span>
                      </div>
                      <h3 className="modal-title">{selectedProject.title}</h3>
                      <p className="project-subtitle">{selectedProject.description}</p>
                    </div>
                    
                    <div className="details-section">
                      <h4>Project Overview</h4>
                      <p>{selectedProject.detailedDescription}</p>
                    </div>
                    
                    <div className="details-section">
                      <h4>Technologies Used</h4>
                      <div className="tech-tags">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-links">
                      <a 
                        href={selectedProject.liveDemoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                         <i className="fas fa-external-link-alt"></i>
                        View Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectCarousel;
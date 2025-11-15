// components/JS ContactSection.js
import React, { useState } from 'react';
import { motion} from 'framer-motion';
import '../css/contact.css';

const ContactSection = () => {
  const contactInfo = {
    name: "Nakul Gawande",
    email: "devinnovators01@gmail.com",
    phone: "+91 7350723868",
    address: "Pune 444108",
    mapUrl: "https://www.google.com/maps/place/Kondhwa,+Pune,+Maharashtra/@18.4677736,73.8935393,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc2ea8a75f1ed4f:0xcc6015e2f426fa4a!8m2!3d18.4695088!4d73.8889779!16s%2Fg%2F1vljdss5?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  };

  const handleContactClick = () => {
    const email = 'devinnovators01@gmail.com';
    const subject = 'Inquiry from DevInno Web Website';
    const body = 'Hello Innovate Web team,\n\nI would like to discuss...';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'facebook':
        return <i className="fab fa-facebook-f"></i>;
      case 'twitter':
        return <i className="fab fa-twitter"></i>;
      case 'linkedin':
        return <i className="fab fa-linkedin-in"></i>;
      case 'instagram':
        return <i className="fab fa-instagram"></i>;
      default:
        return <i className="fas fa-link"></i>;
    }
  };

  return (
    <section id="contact" className="contact-section-expanded">
      <div className="container-wide">
        {/* Header - Same as Projects */}
        <motion.div 
          className="contact-header-expanded text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Have a project in mind or want to learn more about our services?</p>
        </motion.div>
        
        {/* Main Contact Card - Same Structure as Projects */}
        <div className="contact-card-expanded-wrapper">
          <motion.div 
            className="contact-card-expanded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="contact-grid-expanded">
              {/* Contact Info Section - Left Side */}
              <div className="contact-info-section-expanded">
                <div className="contact-person-header-expanded">
                  <div className="contact-person-avatar-expanded">
                    <div className="person-initial-expanded">
                      {contactInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="person-info-expanded">
                      <h3 className="person-name-expanded">{contactInfo.name}</h3>
                      <p className="person-role-expanded">{contactInfo.role}</p>
                    </div>
                  </div>
                  
                  <div className="contact-divider-expanded"></div>
                  
                  <div className="contact-details-expanded">
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-detail-content">
                        <h4>Email</h4>
                        <a href={`mailto:${contactInfo.email}`}>
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-detail-content">
                        <h4>Phone</h4>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-detail-content">
                        <h4>Address</h4>
                        <a 
                          href={contactInfo.mapUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {contactInfo.address}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Section - Right Side */}
              <div className="contact-action-section-expanded">
                <div className="action-content-expanded">
                  <h3 className="action-title-expanded">Ready to Start Your Project?</h3>
                  <p className="action-description-expanded">
                    Let's discuss your ideas and bring them to life. We're here to help you create amazing digital experiences.
                  </p>
                  
                  <div className="contact-actions-expanded">
                    <button 
                      onClick={handleContactClick}
                      className="btn btn-primary-expanded"
                    >
                      <i className="fas fa-envelope me-2"></i> 
                      Contact via Email
                    </button>
                  </div>
                  
                  <div className="social-section-expanded">
                    <h4 className="social-title-expanded">Follow Our Journey</h4>
                    <div className="social-links-expanded">
                      {Object.entries(contactInfo.social).map(([platform, url]) => (
                        <a 
                          key={platform}
                          href={url} 
                          className="social-link-expanded"
                          aria-label={platform}
                        >
                          {getSocialIcon(platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
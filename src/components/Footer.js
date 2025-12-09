// components/JS Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <motion.div 
            className="col-lg-4 mb-4 mb-lg-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="h5 mb-3">
              <img src={logo} alt="DigitalPriorities Logo" className="logo-img" />
              <span className="brand-highlight">Digital</span>Priorities
            </h3>
            <p>Creating innovative web solutions that help businesses grow in the digital world.</p>
            <div className="mt-3">
              <a href="#" className="text-white me-2" aria-label="Facebook">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-2" aria-label="Twitter">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white me-2" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-2 col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="h5 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="col-lg-3 col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="h5 mb-3">Services</h4>
            <ul className="list-unstyled">
              <li className="mb-2">Frontend Development</li>
              <li className="mb-2">Backend Development</li>
              <li className="mb-2">Full Stack Solutions</li>
              <li>UI/UX Design</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="h5 mb-3">Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  aria-label="Your Email"
                  required
                />
                <button className="btn btn-primary" type="submit" style={{ width: "50%" }}> 
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        
        <motion.hr 
          className="my-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-0">
            &copy; {currentYear} DigitalPriorities. All rights reserved. | 
            <a href="#" className="text-white text-decoration-none ms-1">Privacy Policy</a> | 
            <a href="#" className="text-white text-decoration-none ms-1">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
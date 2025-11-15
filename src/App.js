import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import ProjectCarousel from './components/ProjectCarousel';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection'

import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ScrollToTop /> */}
        <Header />
        <main>
          <AboutSection />
          <Services />
          <ProjectCarousel />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

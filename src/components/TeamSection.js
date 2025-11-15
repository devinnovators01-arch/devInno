import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/team.css';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Nakul Gawande",
      role: "Digital Marketing",
      bio: "Digital marketing expert specializing in SEO, social media strategy, and online brand growth.",
      detailedBio: "Nakul is a results-driven digital marketing professional with expertise in SEO optimization, social media marketing, and digital advertising campaigns. He helps businesses establish strong online presence and drive measurable growth through data-driven strategies.",
      social: {
        portfolio: "#",
        linkedin: "#",
        twitter: "#"
      },
      skills: ["SEO", "Social Media", "Google Ads", "Content Strategy"],
      isMain: true
    },
    {
      name: "Abhay Awachar",
      role: "FullStack & Lead Developer",
      bio: "Full-stack developer with 2+ years of experience. Leads technical strategy.",
      detailedBio: "Abhay is a passionate full-stack developer with extensive experience in modern web technologies. As the lead developer, he oversees project architecture, technical decisions, and ensures code quality across all projects.",
      social: {
        portfolio: "https://myportfolio-inky-nine-35.vercel.app/",
        github: "https://github.com/abhayawach",
        linkedin: "#"
      },
      skills: ["React", "Node.js", "MongoDB", "AWS", "Team Leadership"],
      isMain: false
    },
    {
      name: "Aditya Yerokar",
      role: "App Developer",
      bio: "Mobile app developer specializing in cross-platform applications.",
      detailedBio: "Aditya is a skilled mobile app developer with expertise in React Native and Flutter. He creates performant, user-friendly mobile applications that work seamlessly across both iOS and Android platforms.",
      social: {
        portfolio: "#",
        github: "#",
        linkedin: "#"
      },
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      isMain: false
    },
    {
      name: "Aditya Admane",
      role: "MERN Specialist",
      bio: "Full-stack developer skilled in the MERN stack applications.",
      detailedBio: "Aditya specializes in the MERN stack (MongoDB, Express.js, React, Node.js) and is proficient in building full-stack web applications with scalable backend architectures.",
      social: {
        portfolio: "#",
        github: "https://github.com/34Aditya-admane",
        linkedin: "https://www.linkedin.com/in/aditya-admane-42b489245"
      },
      skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
      isMain: false
    }
  ];

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'portfolio':
        return <i className="fas fa-globe"></i>;
      case 'github':
        return <i className="fab fa-github"></i>;
      case 'linkedin':
        return <i className="fab fa-linkedin-in"></i>;
      case 'twitter':
        return <i className="bi bi-twitter"></i>;
      default:
        return <i className="bi bi-link-45deg"></i>;
    }
  };

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="team-section-compact">
      <div className="container">
        {/* Compact Header */}
        <motion.div 
          className="team-header-compact text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title-compact">Our Team</h2>
          <p className="section-subtitle-compact">Meet the experts behind our success</p>
        </motion.div>
        
        {/* Horizontal Team Grid */}
        <div className="team-horizontal">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className={`team-card-compact ${member.isMain ? 'main-member' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="team-card-content">
                {/* Simple Initial Avatar */}
                <div className="member-initial">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="member-info-compact">
                  <h3 className="member-name-compact">
                    {member.name}
                    {member.isMain && <span className="main-badge">Lead</span>}
                  </h3>
                  <p className="member-role-compact">{member.role}</p>
                  <p className="member-bio-compact">{member.bio}</p>
                </div>
                
                <button 
                  className="btn-view-profile"
                  onClick={() => openMemberModal(member)}
                >
                  <i className="fas fa-user-circle me-2"></i>
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Detail Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMemberModal}
            >
              <motion.div
                className="modal-content-compact"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={closeMemberModal}
                >
                  <i className="fas fa-times"></i>
                </button>

                <div className="modal-content-inner">
                  {/* Photo Section - Only in Modal */}
                  <div className="modal-photo-section">
                    <div className="member-photo">
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="photo-placeholder">
                      <p>Profile Photo</p>
                    </div>
                  </div>
                  
                  <div className="modal-details-compact">
                    <div className="member-header-modal">
                      <h3>{selectedMember.name}</h3>
                      <p className="role-modal">{selectedMember.role}</p>
                      {selectedMember.isMain && <span className="lead-badge">Team Lead</span>}
                    </div>
                    
                    <div className="bio-section">
                      <p>{selectedMember.detailedBio}</p>
                    </div>
                    
                    <div className="skills-section">
                      <h4>Skills & Expertise</h4>
                      <div className="skills-tags">
                        {selectedMember.skills.map((skill, index) => (
                          <span key={index} className="skill-tag-modal">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="social-links-modal">
                      <h4>Connect</h4>
                      <div className="social-buttons">
                        {Object.entries(selectedMember.social).map(([platform, url]) => (
                          url !== '#' && (
                            <a 
                              key={platform}
                              href={url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="social-btn"
                            >
                              {getSocialIcon(platform)}
                              <span>{platform}</span>
                            </a>
                          )
                        ))}
                      </div>
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

export default TeamSection;
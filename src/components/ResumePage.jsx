import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaFileAlt, FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import profileImage from '../assets/profile.jpeg';
import './ResumePage.css';

const ResumePage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { language } = useLanguage();
  const t = content[language];

  const selectedProject = t.portfolio.projects.find(p => p.id === selectedId);

  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="resume-page">
      {/* Profile Section */}
      <div className="resume-profile-section">
        <div className="resume-profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="resume-profile-info">
          <h1 className="resume-profile-name">{t.hero.name}</h1>
          <p className="resume-profile-subtitle">{t.hero.subtitle}</p>
          <p className="resume-profile-description">
            {t.hero.description.split('\n')[0]}
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="resume-main-grid">
        {/* Experience Section */}
        <div className="resume-experience-section">
          <h2 className="resume-section-title">
            <FaBriefcase /> Experience
          </h2>
          <div className="resume-experience-list">
            {t.about.experience.map((exp, index) => (
              <div key={index} className="resume-exp-item">
                <div className="resume-exp-header">
                  <h3>{exp.title}</h3>
                  <span className="resume-exp-period">{exp.period}</span>
                </div>
                <p className="resume-exp-company">{exp.company}</p>
                <ul className="resume-exp-description">
                  {exp.description.slice(0, 3).map((desc, i) => (
                    <li key={i}>{renderText(desc)}</li>
                  ))}
                </ul>
                {exp.tags && (
                  <div className="resume-exp-tags">
                    {exp.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="resume-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="resume-projects-section">
          <h2 className="resume-section-title">
            <FaFileAlt /> Projects
          </h2>
          <div className="resume-projects-grid">
            {t.portfolio.projects.map(project => (
              <motion.div
                key={project.id}
                className="resume-project-card"
                onClick={() => setSelectedId(project.id)}
                whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="resume-project-category">{project.category}</span>
                <h3 className="resume-project-title">{project.title}</h3>
                <p className="resume-project-desc">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="resume-skills-section">
        <h2 className="resume-section-title">{t.resume.skillsTitle}</h2>
        <div className="resume-skills-grid">
          <div className="resume-skills-category">
            <h4>AI/ML & Data</h4>
            <div className="resume-skills-badges">
              <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" alt="LangChain" />
              <img src="https://img.shields.io/badge/vLLM-8A2BE2?style=flat-square&logoColor=white" alt="vLLM" />
              <img src="https://img.shields.io/badge/RAG-FF6B6B?style=flat-square&logoColor=white" alt="RAG" />
              <img src="https://img.shields.io/badge/MCP-2ECC71?style=flat-square&logoColor=white" alt="MCP" />
              <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch" />
            </div>
          </div>
          <div className="resume-skills-category">
            <h4>Backend</h4>
            <div className="resume-skills-badges">
              <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
              <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
              <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="resume-bottom-section">
        <div className="resume-bottom-item">
          <h3><FaGraduationCap /> Education</h3>
          <p className="resume-bottom-title">{t.about.education[0].title}</p>
          <p className="resume-bottom-subtitle">{t.about.education[0].degree} ({t.about.education[0].period})</p>
        </div>
        <div className="resume-bottom-item">
          <h3><FaCertificate /> Certifications</h3>
          <p className="resume-bottom-subtitle">
            {t.about.certs.map(c => c.title).join(' | ')}
          </p>
        </div>
        <div className="resume-bottom-item">
          <h3><FaTrophy /> Awards</h3>
          <p className="resume-bottom-subtitle">
            {t.about.awards.map(a => a.title).join(' | ')}
          </p>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedId(null)}>
            <motion.div
              layoutId={`card-${selectedId}`}
              className="modal-content"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button className="modal-close" onClick={() => setSelectedId(null)}>
                <FaTimes />
              </button>

              <div className="modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                <div className="modal-title-row">
                  <div>
                    <span className="modal-category">{selectedProject.category}</span>
                    <h2>{selectedProject.title}</h2>
                  </div>
                  <div className="modal-links">
                    {selectedProject.links.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaGithub /> {t.portfolio.modal.links.github}
                      </a>
                    )}
                    {selectedProject.links.demo && (
                      <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaExternalLinkAlt /> {t.portfolio.modal.links.demo}
                      </a>
                    )}
                    {selectedProject.links.paper && (
                      <a href={selectedProject.links.paper} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaFileAlt /> {t.portfolio.modal.links.paper}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h3>{t.portfolio.modal.overview}</h3>
                  <p>{selectedProject.details.problem}</p>
                  <p>{selectedProject.details.solution}</p>
                </div>

                <div className="modal-row">
                  <div className="modal-col">
                    <h3>{t.portfolio.modal.role}</h3>
                    <p>{selectedProject.details.role}</p>
                  </div>
                  <div className="modal-col">
                    <h3>{t.portfolio.modal.techStack}</h3>
                    <div className="tech-tags">
                      {selectedProject.details.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h3>{t.portfolio.modal.keyFeatures}</h3>
                  <ul className="feature-list">
                    {selectedProject.details.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.details.achievement && (
                  <div className="modal-section">
                    <h3>{t.portfolio.modal.achievement}</h3>
                    <p>{selectedProject.details.achievement}</p>
                  </div>
                )}

                {selectedProject.details.troubleshooting && (
                  <div className="modal-section">
                    <h3>Troubleshooting</h3>
                    <p>{selectedProject.details.troubleshooting}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumePage;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import './Resume.css';

const Resume = () => {
  const { language } = useLanguage();
  const t = content[language].resume;

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="skills-content">
          {/* I use it often */}
          <div className="skills-section">
            <h3>I use it often</h3>

            <div className="skills-category">
              <h4>AI/ML & Data</h4>
              <div className="skills-badges">
                <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="LangChain" />
                <img src="https://img.shields.io/badge/vLLM-8A2BE2?style=for-the-badge&logoColor=white" alt="vLLM" />
                <img src="https://img.shields.io/badge/RAG-FF6B6B?style=for-the-badge&logoColor=white" alt="RAG" />
                <img src="https://img.shields.io/badge/MCP-2ECC71?style=for-the-badge&logoColor=white" alt="MCP" />
                <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
                <img src="https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
                <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
              </div>
            </div>

            <div className="skills-category">
              <h4>Backend & Programming</h4>
              <div className="skills-badges">
                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
              </div>
            </div>

            <div className="skills-category">
              <h4>Tools & Others</h4>
              <div className="skills-badges">
                <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="GCP" />
                <img src="https://img.shields.io/badge/QGIS-589632?style=for-the-badge&logo=qgis&logoColor=white" alt="QGIS" />
              </div>
            </div>
          </div>

          {/* I've used it before */}
          <div className="skills-section">
            <h3>I've used it before</h3>
            <div className="skills-badges">
              <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
              <img src="https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-ec2&logoColor=white" alt="AWS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

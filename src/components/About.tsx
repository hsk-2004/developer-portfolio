import "./styles/About.css";
import ElectricBorder from './ElectricBorder';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-wrapper">
        <ElectricBorder
          color="#ff2a2a"
          speed={1}
          chaos={0.12}
          borderRadius={20}
          className="about-container"
        >
          <div className="about-me">
            <h3 className="about-title">About Me</h3>
            <h2 className="about-tagline">Results-Driven Full Stack Engineer</h2>
            <p className="about-para">
              I am a <span>Full Stack Engineer</span> and Computer Science undergraduate focused on building <span>scalable web applications</span>, <span>automation & RPA workflows</span>, and <span>production-ready digital products</span>. My experience spans frontend engineering, backend architecture, cloud deployment, and modern DevOps workflows.
            </p>
            <p className="about-para">
              Currently pursuing a <span>B.Tech in Computer Science (AI Specialization)</span> at <span>BML Munjal University</span>, I have shipped real-world platforms ranging from a <span>B2B procurement marketplace</span> to <span>wellness ecosystems</span> and scraping-driven data platforms.
            </p>
            <div className="about-skills-grid">
              <div className="skill-item"><span>Full-Stack Architectures</span></div>
              <div className="skill-item"><span>RPA & Web Scraping</span></div>
              <div className="skill-item"><span>Cloud & DevOps Workflows</span></div>
              <div className="skill-item"><span>Product Engineering</span></div>
            </div>
          </div>
        </ElectricBorder>
        <div className="about-actions">
          <a href="/Harman-Singh-Resume.pdf" target="_blank" rel="noreferrer" className="resume-glass-btn">
            <span className="btn-icon">📄</span>
            <span className="btn-text">View Resume</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

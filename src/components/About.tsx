import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-me">
          <h3 className="about-title">About Me</h3>
          <h2 className="about-tagline">Results-Driven Full Stack Engineer</h2>
          <p className="about-para">
            I am a <span>Full Stack Engineer</span> and Computer Science undergraduate focused on building <span>scalable web applications</span>, <span>AI-powered platforms</span>, and <span>production-ready digital products</span>. My experience spans frontend engineering, backend architecture, cloud deployment, and modern DevOps workflows.
          </p>
          <p className="about-para">
            Currently pursuing a <span>B.Tech in Computer Science</span> at <span>BML Munjal University</span>, I have built real-world platforms ranging from <span>wellness ecosystems</span> to <span>AI learning systems</span> and scalable backend infrastructures.
          </p>
          <div className="about-skills-grid">
            <div className="skill-item"><span>Modern UI Engineering</span></div>
            <div className="skill-item"><span>Full-Stack Architectures</span></div>
            <div className="skill-item"><span>Cloud & DevOps Workflows</span></div>
            <div className="skill-item"><span>AI-Integrated Products</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

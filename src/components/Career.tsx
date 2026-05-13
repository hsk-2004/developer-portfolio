import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>SkyForge System Solutions</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed <span>scalable web applications</span> with responsive UI and integrated RESTful APIs. Deployed production-ready apps on <span>Azure servers</span> and utilized Git workflows for collaborative development.
            </p>
            <div className="career-tags">
              <span>React</span><span>Node.js</span><span>Azure</span><span>REST APIs</span>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Yugasa Software Labs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built <span>frontend components</span> and integrated backend APIs using Node.js and PHP. Assisted in debugging, testing, and <span>deployment pipelines</span> for client-facing web applications.
            </p>
            <div className="career-tags">
              <span>Node.js</span><span>PHP</span><span>Frontend</span><span>Testing</span>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>BML Munjal University</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Pursuing <span>Computer Science and Engineering</span>. Focusing on full-stack development, <span>AI/ML</span>, cloud architectures, and building production-grade digital products.
            </p>
            <div className="career-tags">
              <span>Full Stack</span><span>AI/ML</span><span>Cloud</span><span>DevOps</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

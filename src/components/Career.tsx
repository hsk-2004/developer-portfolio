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
                <h4>Product Engineer</h4>
                <h5>Hospiverse India (Startup)</h5>
              </div>
              <h3>Jul 2026 – Present</h3>
            </div>
            <p>
              Drove end-to-end product engineering for a <span>B2B HORECA procurement platform</span>, accelerating startup revenue to <span>6 figures within 3 months</span>. Architected and shipped marketplace features while diagnosing frontend, backend, and database bottlenecks.
            </p>
            <div className="career-tags">
              <span>Next.js</span><span>Supabase</span><span>TypeScript</span><span>Product Engineering</span>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer – Intern</h4>
                <h5>SkyForge System Solutions</h5>
              </div>
              <h3>Mar 2026 – Present</h3>
            </div>
            <p>
              Developed <span>RPA and web scraping</span> workflows to automate data collection, and built responsive UI with integrated RESTful APIs through pair programming. Deployed applications on <span>Azure servers</span> via CI/CD pipelines built with GitHub Actions and Jenkins.
            </p>
            <div className="career-tags">
              <span>RPA</span><span>Azure</span><span>CI/CD</span><span>REST APIs</span>
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

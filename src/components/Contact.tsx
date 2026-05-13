import { MdArrowOutward, MdCopyright, MdEmail, MdSchool } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">

        {/* Big CTA Heading */}
        <div className="contact-header">
          <div className="contact-header-bg">Great.</div>
          <h2 className="contact-headline">
            Let's <span>Build</span>
            <br /> Something Great.
          </h2>
          <p className="contact-subtext">
            Have a project in mind, need a full-stack engineer, or just want to connect?
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="contact-cta-wrapper">
            <a
              href="mailto:hskharmansingh@gmail.com"
              className="contact-cta"
              data-cursor="disable"
            >
              <MdEmail /> Get In Touch
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="contact-grid">
          <div className="contact-card">
            <h4 className="contact-card-label">Connect</h4>
            <a
              href="https://www.linkedin.com/in/harman-singh-681758347/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-link"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/hsk-2004"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-link"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>

          <div className="contact-card">
            <h4 className="contact-card-label">Education</h4>
            <div className="contact-edu">
              <MdSchool className="contact-edu-icon" />
              <div>
                <p className="contact-edu-degree">B.Tech Computer Science & Engineering</p>
                <p className="contact-edu-school">BML Munjal University — 2023–2027</p>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card-credit">
            <h2>
              Designed & Developed <br /> by <span>Harman Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>

      </div>

      {/* Animated background lines */}
      <div className="contact-bg-lines">
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
        <div className="contact-line"></div>
      </div>
    </div>
  );
};

export default Contact;

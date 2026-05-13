import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI & INTELLIGENCE</h3>
              <h4>AI-Powered Platforms</h4>
              <p>
                Focused on building <span>AI-powered platforms</span> and AI-integrated systems, 
                leveraging LLMs and RAG architectures to deliver production-ready digital products.
              </p>
              <h5>Expertise & Models</h5>
              <div className="what-content-flex">
                <div className="what-tags">ChatGPT</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">Gemini</div>
                <div className="what-tags">DeepSeek</div>
                <div className="what-tags">Codex</div>
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">LLM Agents</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FULL STACK ENG</h3>
              <h4>Scalable Infrastructures</h4>
              <p>
                Expertise in <span>frontend engineering</span>, backend architecture, 
                and cloud deployment, with strong hands-on experience in the MERN ecosystem and Next.js.
              </p>
              <h5>Core Stack</h5>
              <div className="what-content-flex">
                <div className="what-tags">Next.js</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">AWS / Azure</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

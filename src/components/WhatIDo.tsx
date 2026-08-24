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
              <h3>AUTOMATION & AI</h3>
              <h4>RPA & AI-Powered Platforms</h4>
              <p>
                Focused on building <span>RPA workflows</span> and <span>web scraping</span> pipelines,
                alongside AI-integrated systems using LLMs to deliver production-ready digital products.
              </p>
              <h5>Expertise & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">RPA</div>
                <div className="what-tags">Web Scraping</div>
                <div className="what-tags">Browser Automation</div>
                <div className="what-tags">Workflow Automation</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">Generative AI</div>
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
                and cloud deployment, with strong hands-on experience across React, Next.js, and Node.js.
              </p>
              <h5>Core Stack</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Node.js / Express</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">Supabase</div>
                <div className="what-tags">Docker / Kubernetes</div>
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

import { useEffect, useRef, useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import CursorGlow from "./CursorGlow";
import { MdArrowForward } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hospiverse India",
    category: "B2B HORECA Procurement Platform",
    description: (
      <>
        A B2B procurement and sourcing marketplace connecting buyers with 40+
        verified suppliers, including paying brands{" "}
        <span className="work-highlight">SALVA</span> and{" "}
        <span className="work-highlight">Wang Professionals</span>, engineered
        end-to-end using DMAIC to optimize the full platform stack.
      </>
    ),
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/images/hospiverse.png",
    link: "https://www.hospiverse.in/",
  },
  {
    title: "Freightos",
    category: "Global Freight Agent Directory",
    description: (
      <>
        A scraping-driven directory of 44,000+ verified freight agents built
        with <span className="work-highlight">SeleniumBase's CDP Mode</span>{" "}
        for automated login, form-filling, and data extraction, with bulk
        agent selection and scheduled email outreach.
      </>
    ),
    tools: ["Next.js", "React", "Microsoft Azure", "Web Scraping"],
    image: "/images/frieghtos.png",
    link: "https://freightos.harmanxdev.fun",
  },
  {
    title: "Hlty.care",
    category: "Wellness Platform",
    description: (
      <>
        A role-based wellness platform with segmented journeys for parents,
        clinicians, and educators, featuring{" "}
        <span className="work-highlight">Shopify</span>-integrated workflows
        for instant resource delivery and automated onboarding.
      </>
    ),
    tools: ["Next.js", "Shopify", "Tailwind CSS"],
    image: "/images/hlty.care.png",
    link: "https://hlty.care",
  },
  {
    title: "SkyForge",
    category: "Enterprise Frontend",
    description: (
      <>
        A high-performance enterprise frontend application built with
        reusable component architecture and client-side routing for{" "}
        <span className="work-highlight">SkyForge System Solutions</span>.
      </>
    ),
    tools: ["React", "Tailwind CSS", "REST APIs", "Azure"],
    image: "/images/skyforge.png",
    link: "https://buildwithskyforge.com/",
  },
  {
    title: "QuickQR",
    category: "Scalable Backend",
    description: (
      <>
        A production-grade backend system featuring RESTful APIs, PostgreSQL
        database design with Prisma ORM, and CI/CD deployment pipelines.
      </>
    ),
    tools: ["Node.js", "Express", "PostgreSQL", "Prisma ORM"],
    image: "/images/quickqr.png",
    link: "https://quickqr.harmanxdev.fun/",
  },
  {
    title: "Instalearn",
    category: "Landing Page",
    description: (
      <>
        A high-conversion landing page for an AI-powered learning platform,
        featuring modern UI components and seamless content delivery.
      </>
    ),
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/instalearn.png",
    link: "https://instalearnapp.com/",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Desktop: pinned scroll-driven slides ──
  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];
    const totalSlides = slides.length;

    slides[0]?.classList.add("work-slide-active");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        // Measured live so invalidateOnRefresh recomputes the correct pin
        // distance after fonts/images load — a frozen value leaves the pin
        // spacing out of sync and dumps the offset as a jump at the footer.
        end: () => `+=${document.documentElement.clientHeight * (totalSlides - 1)}`,
        pin: true,
        pinType: "transform",
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.min(
            Math.floor(progress * totalSlides),
            totalSlides - 1
          );

          slides.forEach((slide, index) => {
            if (index === activeIndex) {
              slide.classList.add("work-slide-active");
              slide.classList.remove("work-slide-exit");
            } else if (index < activeIndex) {
              slide.classList.remove("work-slide-active");
              slide.classList.add("work-slide-exit");
            } else {
              slide.classList.remove("work-slide-active");
              slide.classList.remove("work-slide-exit");
            }
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // ── Desktop layout: pinned with absolute-positioned slides ──
  if (!isMobile) {
    return (
      <div className="work-pinned-section" id="work" ref={sectionRef}>
        <CursorGlow />
        <div className="work-pinned-container section-container">
          <div className="work-pinned-header">
            <h2>
              My <span>Work</span>
            </h2>
            <div className="work-counter">
              <span className="work-counter-label">Selected Projects</span>
            </div>
          </div>

          <div className="work-slides-viewport">
            {projects.map((project, index) => (
              <div
                className={`work-slide ${index === 0 ? "work-slide-active" : ""}`}
                key={index}
                ref={(el) => {
                  slidesRef.current[index] = el;
                }}
              >
                <div className="work-slide-content">
                  <div className="work-slide-info">
                    <div className="work-slide-number">
                      <span>0{index + 1}</span>
                      <div className="work-slide-divider" />
                      <span className="work-slide-total">
                        0{projects.length}
                      </span>
                    </div>
                    <div className="work-slide-details">
                      <p className="work-slide-category">{project.category}</p>
                      <h3 className="work-slide-title">{project.title}</h3>
                      <p className="work-slide-description">
                        {project.description}
                      </p>
                      <div className="work-slide-tools">
                        <span className="work-tools-label">Tech Stack</span>
                        <div className="work-tools-tags">
                          {project.tools.map((tool, i) => (
                            <span className="work-tool-tag" key={i}>
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="work-slide-cta">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-live-link"
                          data-cursor="disable"
                        >
                          View Live Project{" "}
                          <MdArrowForward className="link-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="work-slide-image">
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.link}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="work-scroll-hint">
            <div className="work-scroll-hint-line" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    );
  }

  // ── Mobile layout: normal vertical card list (NO pinning) ──
  return (
    <div className="work-mobile-section" id="work" ref={sectionRef}>
      <div className="work-mobile-container section-container">
        <div className="work-pinned-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-counter">
            <span className="work-counter-label">Selected Projects</span>
          </div>
        </div>

        <div className="work-mobile-list">
          {projects.map((project, index) => (
            <div
              className="work-mobile-card"
              key={index}
              ref={(el) => {
                slidesRef.current[index] = el;
              }}
            >
              <div className="work-mobile-card-image">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                  link={project.link}
                />
              </div>
              <div className="work-mobile-card-info">
                <div className="work-slide-number">
                  <span>0{index + 1}</span>
                  <div className="work-slide-divider" />
                  <span className="work-slide-total">
                    0{projects.length}
                  </span>
                </div>
                <p className="work-slide-category">{project.category}</p>
                <h3 className="work-slide-title">{project.title}</h3>
                <p className="work-slide-description">
                  {project.description}
                </p>
                <div className="work-slide-tools">
                  <span className="work-tools-label">Tech Stack</span>
                  <div className="work-tools-tags">
                    {project.tools.map((tool, i) => (
                      <span className="work-tool-tag" key={i}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="work-slide-cta">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live-link"
                    data-cursor="disable"
                  >
                    View Live Project{" "}
                    <MdArrowForward className="link-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

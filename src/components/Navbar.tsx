import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isMobile ? 0.8 : 1.5,
      speed: 1,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
      normalizeScroll: false,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        if (section) {
          gsap.to(smoother, {
            scrollTop: smoother.offset(section, "top top"),
            duration: 2.5,
            ease: "power2.inOut"
          });
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });

    // Re-measure once images/fonts finish loading. In production (Vercel)
    // assets load over the network *after* ScrollTrigger's first measurement,
    // shifting section heights and leaving the pin math stale — which makes
    // pinned sections (e.g. Work) drift while scrolling. These refreshes
    // recompute the cached start/end positions against the final layout.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          HS
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
        <div className="navbar-socials">
          <a
            href="/HarmanSingh-DEV.pdf"
            target="_blank"
            rel="noreferrer"
            className="navbar-resume-link"
          >
            RESUME
          </a>
          <a
            href="https://github.com/hsk-2004"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="navbar-social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harman-singh-681758347/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="navbar-social-link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/_xhskx_/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="navbar-social-link"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

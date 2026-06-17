import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const technologies = [
  { name: "React", logo: "/images/tech/react.svg" },
  { name: "Next.js", logo: "/images/tech/nextjs.svg" },
  { name: "Node.js", logo: "/images/tech/nodejs.svg" },
  { name: "Express", logo: "/images/tech/express.svg" },
  { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
  { name: "MySQL", logo: "/images/tech/mysql.svg" },
  { name: "TypeScript", logo: "/images/tech/typescript.svg" },
  { name: "JavaScript", logo: "/images/tech/javascript.svg" },
];

const TechChip = ({ name, logo }: { name: string; logo: string }) => (
  <div className="tech-loop-item">
    <img src={logo} alt={name} loading="lazy" />
    <span>{name}</span>
  </div>
);

const TechStack = () => {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container section-container">
        <div className="tech-stack-header">
          <span className="tech-stack-eyebrow">Technologies</span>
          <h2 className="tech-stack-title">
            My <span>Tech</span> Stack
          </h2>
          <p className="tech-stack-subtitle">
            The tools and frameworks I rely on to design, build, and ship
            production-grade software.
          </p>
        </div>
      </div>

      <div className="tech-loop">
        <Marquee
          className="tech-loop-row"
          direction="left"
          speed={40}
          autoFill
          pauseOnHover
          gradient={false}
        >
          {technologies.map((tech) => (
            <TechChip key={tech.name} {...tech} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;

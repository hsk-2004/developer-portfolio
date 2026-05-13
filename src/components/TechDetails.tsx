import { motion } from "framer-motion";
import "./styles/TechDetails.css";

const skillData = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "C/C++", "SQL"],
  },
  {
    category: "Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "React Native",
      "Tailwind CSS",
      "Prisma ORM",
      "Shopify",
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Supabase",
      "Git",
      "Docker",
      "AWS EC2",
      "Azure",
      "Terminus",
      "Vercel",
    ],
  },
  {
    category: "Concepts",
    skills: [
      "RESTful APIs",
      "API Integration",
      "Responsive UI/UX",
      "CI/CD Pipelines",
      "Cloud Deployment",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const TechDetails = () => {
  return (
    <section className="tech-details-section">
      <div className="tech-details-container section-container">
        <motion.div
          className="tech-details-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillData.map((item, index) => (
            <motion.div
              className="tech-details-card"
              key={index}
              variants={itemVariants}
            >
              <h4 className="tech-details-label">{item.category}</h4>
              <div className="tech-details-tags">
                {item.skills.map((skill, i) => (
                  <motion.span
                    className="tech-tag"
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 42, 42, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechDetails;

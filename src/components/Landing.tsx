import { PropsWithChildren } from "react";
import { motion, type Transition, type Variants } from "framer-motion";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const floatingTransition: Transition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <motion.div
          className="landing-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="landing-intro">
            <motion.p
              className="landing-label"
              variants={itemVariants}
            >
              Hello! I'm
            </motion.p>
            <motion.h1 variants={itemVariants}>
              <motion.span
                animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
                transition={floatingTransition}
                style={{ display: "inline-block" }}
              >
                HARMAN
              </motion.span>
              <br />
              <motion.span
                animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
                transition={{ ...floatingTransition, delay: 0.5 }}
                style={{ display: "inline-block", color: "#ff2a2a", fontWeight: "800" }}
              >
                SINGH
              </motion.span>
            </motion.h1>
          </div>
          <div className="landing-info">
            <motion.p
              className="landing-role-label"
              variants={itemVariants}
            >
              Full Stack
            </motion.p>
            <motion.h2
              className="landing-info-h2"
              variants={itemVariants}
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ ...floatingTransition, duration: 4 }}
                style={{ display: "inline-block" }}
              >
                Software
              </motion.span>
              <br />
              <motion.span
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ ...floatingTransition, duration: 4, delay: 1 }}
                style={{ display: "inline-block", color: "rgba(255, 255, 255, 0.6)" }}
              >
                Engineer
              </motion.span>
            </motion.h2>
          </div>
        </motion.div>
        {children}
      </div>
    </>
  );
};

export default Landing;

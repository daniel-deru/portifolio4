import { useRef, useState, useEffect } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"

// https://dev.to/holdmypotion/react-marquee-in-framer-motion-3d5a

import SkillsPage  from "./styled/skills.styled";

const Skills = () => {

  const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript"]
  const TECHNOLOGIES = ["ReactJS", "NextJS", "Framer",  "PyQt", "React Native", "Sass", "GSAP"]
  const TOOLS = ["NodeJS", "Git", "Wordpress",  "Figma", "cPanel", "WHM", "WHMCS"]

  const languageRef = useRef(null)

  const calcWidth = (array) => {
    const items = array.length
    console.log(items * 100)
  }


  const tickerVariant = {
    animate: (width) => ({
      x: [0, width],
      transition: {
        x: {
          repeat: Infinity,
          repeateType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }),
    
  }

  useEffect(() => {
    calcWidth(LANGUAGES)
  }, [])

  return (
    <SkillsPage>
        
        <div className="ticker">
          <motion.div
            className="track"
            variants={tickerVariant}
            animate="animate"
            custom={-700}
          >
            {[].concat(LANGUAGES, LANGUAGES).map(item => (
              <span className="item">{item}</span>
            ))}
          </motion.div>
        </div>
        <div className="ticker reverse">
          <motion.div
            className="track"
            variants={tickerVariant}
            animate="animate"
            custom={700}
          >
            {[].concat(LANGUAGES, LANGUAGES).map(item => (
              <span className="item">{item}</span>
            ))}
          </motion.div>
        </div>
        <div className="ticker">
          <motion.div
            className="track"
            variants={tickerVariant}
            animate="animate"
            custom={-700}
          >
            {[].concat(TECHNOLOGIES, TECHNOLOGIES).map(item => (
              <span className="item">{item}</span>
            ))}
          </motion.div>
        </div>

    </SkillsPage>
  );
};

export default Skills;

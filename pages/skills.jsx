import { useRef, useState, useEffect } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"

// https://dev.to/holdmypotion/react-marquee-in-framer-motion-3d5a

import SkillsPage  from "./styled/skills.styled"

const itemWidth = 100
const itemMargin = 10

const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript", "JAVA", "Rust", "Solidity", "C#", "SQL"]
const LIBRARIES = ["ReactJS", "NextJS", "Framer",  "PyQt", "React Native", "Sass", "GSAP", "NodeJS", "Git", "Tailwind", "SC", "jQuery", "MySQL", "SQLite"]
const SKILLS = ["OOP", "MVC", "Linux", "UI/UX", "API's", "Testing", "Desktop", "Mobiile", "Web", "Frontend", "Backend", "Databases"]

const Skills = () => {

  const contentVariant = {
    initial: {
      width: 20
    },
    visible: {
      width: "100%"
    }
  }

  const tickerVariant = {
    animate: (width) => ({
      x: [0, width],
      transition: {
        x: {
          repeat: Infinity,
          repeateType: "loop",
          duration: 50,
          ease: "linear"
        }
      }
    }),
  }

  const spinVariant = {
    spin: {
      rotate: 360
    }
  }

  useEffect(() => {

  }, [])

  return (
    <SkillsPage 
      as={motion.div} 
      itemWidth={itemWidth} 
      itemMargin={itemMargin} 
      variants={contentVariant} 
      initial="initial" 
      animate="visible"
    >
        
        <div className="ticker">
          <motion.div
            className="track"
            variants={tickerVariant}
            animate="animate"
            custom={-LANGUAGES.length * (itemWidth + itemMargin)}
          >
            {[].concat(LANGUAGES, LANGUAGES).map(item => (
              <motion.span 
                className="item"
                variants={spinVariant}
                whileHover="spin"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="ticker reverse">
          <motion.div
            className="track"
            variants={tickerVariant}
            animate="animate"
            custom={LIBRARIES.length * (itemWidth + itemMargin)}
          >
            {[].concat(LIBRARIES, LIBRARIES).map(item => (
              <motion.span 
                className="item"
                variants={spinVariant}
                whileHover="spin"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="ticker">
          <motion.div
            className="track"
            variants={tickerVariant}
            animate="animate"
            custom={-SKILLS.length * (itemWidth + itemMargin)}
          >
            {[].concat(SKILLS, SKILLS).map(item => (
              <motion.span 
                className="item"
                variants={spinVariant}
                whileHover="spin"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

    </SkillsPage>
  );
};

export default Skills;

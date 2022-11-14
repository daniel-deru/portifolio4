import { useRef, useState, useEffect } from "react"
import { motion, useTransform, useMotionValue, useAnimation } from "framer-motion"

// https://dev.to/holdmypotion/react-marquee-in-framer-motion-3d5a

import SkillsPage  from "./styled/skills.styled"

const itemWidth = 100
const itemMargin = 10

const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript", "JAVA", "Rust", "Solidity", "C#", "SQL"]
const LIBRARIES = ["ReactJS", "NextJS", "Framer",  "PyQt", "React Native", "Sass", "GSAP", "NodeJS", "Git", "Tailwind", "SC", "jQuery", "MySQL", "SQLite"]
const SKILLS = ["OOP", "MVC", "Linux", "UI/UX", "API's", "Testing", "Desktop", "Mobiile", "Web", "Frontend", "Backend", "Databases"]

const Skills = () => {

  const animation = useAnimation()

  const sequence = async () => {
    await animation.start({
      height: "100%",
      transition: {
        duration: 1
      }
    })
    await animation.start({
      width: "80%",
      transition: {
        duration: 1
      }
    })
  }

  const contentVariant = {
    initial: {
      width: 5,
      height: 5
    }
  }

  const tickerVariant = {
    initial: {
      opacity: 0
    },
    animate: (width) => ({
      x: [0, width],
      opacity: 1,
      transition: {
        opacity: {
          delay: 1
        },
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
    sequence()
  }, [])

  return (
    <SkillsPage 
      as={motion.div} 
      itemWidth={itemWidth} 
      itemMargin={itemMargin} 
      variants={contentVariant} 
      initial="initial"
      // onClick={sequence}
      animate={animation}
    >
        
        <div className="ticker">
          <motion.div
            className="track"
            variants={tickerVariant}
            initial="initial"
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
            initial="initial"
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
            initial="initial"
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

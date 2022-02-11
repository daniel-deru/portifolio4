import { useRef, useState, useEffect } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"

import { Orbit } from "../components/styled/Orbit.styled";
import { Skills } from "./styled/skills.styled";

const skills = () => {
  const x = useMotionValue(0)
  const rotateX = useTransform(x, [-150, 150], [-90, 90])
  const y = useMotionValue(0)
  const rotateY = useTransform(x, [-150, 150], [-90, 90])

  const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript"]
  const TECHNOLOGIES = ["ReactJS", "NextJS", "Django",  "PyQt", "Bootstrap", "Sass", "GSAP"]
  const TOOLS = ["NodeJS", "Git", "Wordpress",  "Photoshop", "cPanel", "WHM", "WHMCS"]
  const SIZE = 250

  const fadeVariant = {
    hidden: {
      opacity: 0
    },
    visible: index => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * 0.3
      }
    })
  }

  const rotateVariant = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeateType: "loop",
        repeateDelay: 0,
        duration: 20,
        delay: 3,
        ease: "linear"
      }
    }
  }
  const statVariant = {
    animate: {
      rotateZ: -360,
      transition: {
        repeat: Infinity,
        repeateType: "loop",
        repeateDelay: 0,
        duration: 20,
        delay: 3,
        ease: "linear"
      }
    }
  }


  const languageRef = useRef()
  const technologyRef = useRef()
  const toolRef = useRef()

  useEffect(() => {
    console.log(languageRef.current.children)
    let languageRotate = rotate(languageRef.current.children, LANGUAGES)
    let techRotate = rotate(technologyRef.current.children, TECHNOLOGIES)
    let toolRotate = rotate(toolRef.current.children, TOOLS)
  }, [languageRef])
  

  const rotate = (nodeList, items) => {
    let radius = SIZE / 2
    for(let i = 1; i < nodeList.length; i++){
      let angle = 2 * Math.PI / items.length * i
  
      let x = radius - Math.round(radius * Math.cos(angle))
      let y = radius - Math.round(radius * Math.sin(angle))

      let itemWidth = nodeList[i].clientWidth / 2
      nodeList[i].style.transform = `rotate(${angle * (180/Math.PI) - 90}deg)`
      nodeList[i].style.top = `${y}px`
      nodeList[i].style.left = `${x - itemWidth}px`
    }
  }

  return (
    <Skills>
        <Orbit size={SIZE}>
          <motion.div 
          className="container"  
          ref={languageRef}

          drag
          dragConstraints={{top: 0, right: 0, left: 0, bottom: 0}}
          style={{rotate: rotateX, x: x}}
          // variants={rotateVariant}
          // animate="animate"
          // custom={360}
          >
            <motion.div
              className="center"

              // variants={statVariant}
              // animate="animate"
            >
              Languages
            </motion.div>
            {LANGUAGES.map((language, index) => <motion.div 
              key={language}

              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              custom={index}

            >
              {language}
            </motion.div>)}
          </motion.div>
        </Orbit>

        <Orbit size={SIZE}>
            <motion.div className="container" ref={technologyRef}>
                <div>Technologies</div>
                {TECHNOLOGIES.map(technology => <div key={technology}>{technology}</div>)}
            </motion.div>

            <motion.div className="container" ref={toolRef}>
                <div>Tools</div>
                {TOOLS.map(tool => <div key={tool}>{tool}</div>)}
            </motion.div>
        </Orbit>

    </Skills>
  );
};

export default skills;

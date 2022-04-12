import { useRef, useState, useEffect } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"

import { Orbit } from "../components/styled/Orbit.styled";
import SkillsPage  from "./styled/skills.styled";

const Skills = () => {
  const [SIZE, SetSIZE] = useState(250)
  const x = useMotionValue(0)
  const rotateX = useTransform(x, [-150, 150], [-90, 90])

  const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript"]
  const TECHNOLOGIES = ["ReactJS", "NextJS", "Django",  "PyQt", "Bootstrap", "Sass", "GSAP"]
  const TOOLS = ["NodeJS", "Git", "Wordpress",  "Photoshop", "cPanel", "WHM", "WHMCS"]


  const fadeVariant = {
    hidden: {
      opacity: 0
    },
    visible: index => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: (index * 0.1) + 0.75
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
    hidden: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }


  const languageRef = useRef()
  const technologyRef = useRef()
  const toolRef = useRef()

  const changeSize = () => {
    if(window.innerWidth <= 1000 && window.innerWidth > 700) SetSIZE(200)
    if(window.innerWidth > 1000) SetSIZE(250)
    if(window.innerWidth <= 700) SetSIZE(150)
  }

  useEffect(() => {
    console.log(languageRef.current.children)
    let languageRotate = rotate(languageRef.current.children, LANGUAGES)
    let techRotate = rotate(technologyRef.current.children, TECHNOLOGIES)
    let toolRotate = rotate(toolRef.current.children, TOOLS)
    window.addEventListener("resize", () => changeSize())
    changeSize()
    console.log("hello")
  }, [languageRef, SIZE])
  

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
    <SkillsPage>
        <Orbit size={SIZE}>
          <motion.div 
          className="container"  
          ref={languageRef}

          drag
          dragConstraints={{top: 0, right: 0, left: 0, bottom: 0}}
          style={{ x: x}}
          >
            <motion.div
              className="center"
              id="languages"
              variants={statVariant}
              initial="hidden"
              animate="animate"
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
            <motion.div 
              className="container" 
              ref={technologyRef}

              drag
              dragConstraints={{top: 0, right: 0, left: 0, bottom: 0}}
              style={{rotate: rotateX, x: x}}
              
              >
                <motion.div
                  variants={statVariant}
                  initial="hidden"
                  animate="animate"
                >
                  Technologies
                </motion.div>
                {TECHNOLOGIES.map((technology, index) => 
                <motion.div 
                  key={technology}

                  variants={fadeVariant}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {technology}
                </motion.div>)}
            </motion.div>

            <motion.div 
              className="container" 
              ref={toolRef}
              
              drag
              dragConstraints={{top: 0, right: 0, left: 0, bottom: 0}}
              style={{rotate: rotateX, x: x}}
              
              >
                <motion.div
                  variants={statVariant}
                  initial="hidden"
                  animate="animate"

                >
                  Tools
                </motion.div>
                {TOOLS.map((tool, index) => 
                  <motion.div 
                    key={tool}

                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    >
                    {tool}
                  </motion.div>)}
            </motion.div>
        </Orbit>

    </SkillsPage>
  );
};

export default Skills;

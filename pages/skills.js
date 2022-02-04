import styles from "../styles/Skills.module.css"

import { useRef, useState, useEffect } from "react"

import { Orbit } from "../components/styled/Orbit.styled";

const skills = () => {
  const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript"]
  const TECHNOLOGIES = ["ReactJS", "NextJS", "Django",  "PyQt", "Bootstrap", "Sass", "GSAP"]
  const TOOLS = ["NodeJS", "Git", "Wordpress",  "Photoshop", "cPanel", "WHM", "WHMCS"]

  const languageRef = useRef()
  const technologyRef = useRef()
  const toolRef = useRef()

  useEffect(() => {
    
  }, [])

  const rotate = (orbitArray) => {

  }
  return (
    <div className={styles.skills}>

        <Orbit ref={languageRef}>
          <div>Languages</div>
          {LANGUAGES.map(language => <div>{language}</div>)}
        </Orbit>
        <div className="technologies-tools">
            <Orbit ref={technologyRef}>
                <div>Technologies</div>
                {TECHNOLOGIES.map(technology => <div>{technology}</div>)}
            </Orbit>

            <Orbit ref={toolRef}>
                <div>Tools</div>
                {TOOLS.map(tool => <div>{tool}</div>)}
            </Orbit>
        </div>

    </div>
  );
};

export default skills;

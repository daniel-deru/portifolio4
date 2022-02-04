import styles from "../styles/Skills.module.css"

import { useRef, useState, useEffect } from "react"

import { Orbit } from "../components/styled/Orbit.styled";
import { Skills } from "./styled/skills.styled";

const skills = () => {
  // const TECHNOLOGIES = [".", ".", ".", "."]
  // const TECHNOLOGIES = [".", ".", ".", "."]
  // const TOOLS = [".", ".", ".", "."]
  const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript"]
  const TECHNOLOGIES = ["ReactJS", "NextJS", "Django",  "PyQt", "Bootstrap", "Sass", "GSAP"]
  const TOOLS = ["NodeJS", "Git", "Wordpress",  "Photoshop", "cPanel", "WHM", "WHMCS"]
  const SIZE = 250

  const languageRef = useRef()
  const technologyRef = useRef()
  const toolRef = useRef()

  useEffect(() => {
    console.log(languageRef.current.children)
    let languageRotate = rotate(languageRef.current.children, LANGUAGES)
    let techRotate = rotate(technologyRef.current.children, TECHNOLOGIES)
    let toolRotate = rotate(toolRef.current.children, TOOLS)
  }, [])
  

  const rotate = (nodeList, items) => {
    const CIRCLE = 360
    let radius = SIZE / 2
    for(let i = 1; i < nodeList.length; i++){
      let angle = 2 * Math.PI / items.length * i

      let x = radius - (radius * Math.round(Math.cos(angle)))
      let y = radius - (radius * Math.round(Math.sin(angle)))
      nodeList[i].style.top = `${y}px`
      nodeList[i].style.left = `${x}px`
      // console.log(x, y)
      // console.log((radius * Math.round(Math.cos(angle))), (radius * Math.round(Math.sin(angle))))
    }
  }

  return (
    <Skills>
        <Orbit size={SIZE}>
          <div className="container"  ref={languageRef}>
            <div>Languages</div>
            {LANGUAGES.map(language => <div key={language}>{language}</div>)}
          </div>
        </Orbit>

        <Orbit size={SIZE}>
            <div className="container" ref={technologyRef}>
                <div>Technologies</div>
                {TECHNOLOGIES.map(technology => <div key={technology}>{technology}</div>)}
            </div>

            <div className="container" ref={toolRef}>
                <div>Tools</div>
                {TOOLS.map(tool => <div key={tool}>{tool}</div>)}
            </div>
        </Orbit>

    </Skills>
  );
};

export default skills;

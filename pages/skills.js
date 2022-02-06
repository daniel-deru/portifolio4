import { useRef, useState, useEffect } from "react"

import { Orbit } from "../components/styled/Orbit.styled";
import { Skills } from "./styled/skills.styled";

const skills = () => {
  // const LANGUAGES = ["1", "2", "3", "4", "5", "6"]
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
  }, [languageRef])
  

  const rotate = (nodeList, items) => {
    let radius = SIZE / 2
    for(let i = 1; i < nodeList.length; i++){
      let angle = 2 * Math.PI / items.length * i
  
      let x = radius - Math.round(radius * Math.cos(angle))
      let y = radius - Math.round(radius * Math.sin(angle))

      console.log(nodeList[i].clientWidth / 2 )
      let itemWidth = nodeList[i].clientWidth / 2
      nodeList[i].style.top = `${y}px`
      nodeList[i].style.left = `${x - itemWidth}px`
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

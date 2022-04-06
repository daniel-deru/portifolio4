import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState, useRef, useLayoutEffect  } from 'react'
import { motion } from 'framer-motion'
import projects from "../../projects.json"
import { ProjectPage } from '../styled/project.styled'
import Image from 'next/image'

const project = ({currentProject}) => {
    const router = useRouter()
    const containerRef = useRef()
    const rotate = (nodeList, items) => {
        let radius = 300 / 2
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
    useEffect(() => {
    rotate(containerRef.current.children, currentProject.stack)
    }, [])
    return (
        <ProjectPage>

            <h1>{currentProject.name}</h1>
           
            
            <div className='main-container' >
                <div className='stack-container' ref={containerRef}>
                    <div></div>
                    {currentProject.stack.map(stackItem => (
                        <div key={stackItem}>{stackItem}</div>
                    ))}
                </div>
                <p>
                    <div className='link-container'>
                        <a href={currentProject.url} target="_blank">Demo</a>
                        <a href={currentProject.github} target="_blank">Code</a>
                    </div>
                    {currentProject.description}
                </p>
            </div>

            
            <img src={`/${currentProject.image}`}/>
            
        </ProjectPage>
    )
}

export const getStaticProps = (context) => {
    console.log(context.params)
    const urlproject = projects.filter(projectName => {
       return projectName.path === context.params.project
    })
    return {
        props: {
            currentProject: urlproject[0]
        }
    }
}

export const getStaticPaths = () => {
    const projectsArray = projects.map(project => project.path)
    const paths = projectsArray.map(path => ({params: {project: path}}))
    return {
        paths,
        fallback: false
    }
}

export default project
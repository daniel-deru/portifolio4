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
    const [image, setImage] = useState({width: 200, height: 200})
    useEffect(() => {
        setImage({width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight})
    }, [image])

    
    
    return (
        <ProjectPage>

            <h1>{currentProject.name}</h1>
            {/* <p>{currentProject.description}</p> */}

            <div className='container' ref={containerRef}>
                {/* <img src={`/${currentProject.image}`}/> */}
                <p>{currentProject.description}</p>
            </div>
            
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
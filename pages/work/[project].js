import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState, useLayoutEffect } from 'react'
import projects from "../../projects.json"
import { ProjectPage } from '../styled/project.styled'
import Image from 'next/image'

const project = ({currentProject}) => {
    const router = useRouter()

    useLayoutEffect(() => {

    }, [])
    
    return (
        <ProjectPage>
            <h1>{currentProject && currentProject.name}</h1>
            <p>Create styled graphs quickly and download them as SVG or PNG in any size.</p>
            <div className='image-container'>
                <Image src={`/${currentProject.image}`} width="500" height="281"/>
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
import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState, useLayoutEffect } from 'react'
import projects from "../../projects.json"
import { ProjectPage } from '../styled/project.styled'
import Image from 'next/image'

const project = () => {
    const router = useRouter()
    const [currentProject, setCurrentProject] = useState()

    const getProject = () => {
        const { project } = router.query
        if(!project) router.push("/work")
        const urlproject = projects.filter(projectName => projectName.path === project)
        setCurrentProject(urlproject[0])
    }

    useLayoutEffect(() => {
        getProject()
    }, [currentProject])
    
    return (
        <ProjectPage>
            <h1>{currentProject && currentProject.name}</h1>
            <Image src={`/${currentProject.image}`} width="500"/>
        </ProjectPage>
    )
}

export const getStaticProps = () => {
    
}

export default project
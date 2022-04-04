import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import projects from "../../projects.json"

const project = () => {
    const router = useRouter()
    const [currentProject, setCurrentProject] = useState()

    const getProject = () => {
        const { project } = router.query
        if(!project) router.push("/work")
        const urlproject = projects.filter(projectName => projectName.path === project)
        setCurrentProject(urlproject[0])
    }

    useEffect(() => {
        getProject()
    }, [currentProject])
    return (
        <div>{currentProject && currentProject.name}</div>
    )
}

export default project
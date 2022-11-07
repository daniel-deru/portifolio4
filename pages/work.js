import { motion } from "framer-motion";
import WorkPage from "./styled/work.styled";
import Link from "next/link";
import { useState } from "react"
import projects from "../projects.json"
import { useRouter } from "next/router";

import { projectVariant, childVariant } from "../framerVariants/pages/work";

const Work = () => {
  const router = useRouter()
  
  const showProject = (project) => {
    router.push(`work/${project.path}`)
  }
  return(
    <WorkPage>
        {projects.map((project, index) => {
          
          return (<motion.section key={index}>
             
                <motion.div
                  key={index}
                  variants={projectVariant}
                  initial="hidden"
                  animate="visible"
                  custom={index}

                  onClick={() => showProject(project)}
                >
                  <motion.span
                    variants={childVariant}
                    animate="visible"
                    custom={index}
                  >
                    {project.name}
                  </motion.span>

                </motion.div>
            
            </motion.section>)}
        ) }
    </WorkPage>
  );
};

export default Work;

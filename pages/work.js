import { motion } from "framer-motion";
import WorkPage from "./styled/work.styled";
import Link from "next/link";
import { useState } from "react"
import projects from "../projects.json"
import { useRouter } from "next/router";

import { projectVariant, childVariant } from "../framerVariants/pages/work";

const projectsArray = [
  [projects[0] ,projects[1]],
  [projects[2], projects[3], projects[4]],
  [projects[5], projects[6]]
]

const Work = () => {
  const router = useRouter()
  
  const showProject = (project) => {
    router.push(`work/${project.path}`)
  }
  return(
    <WorkPage>
        {projectsArray.map((projectGroup, groupIndex) => 
          <motion.section key={groupIndex}>
            {projectGroup.map((project, index) => 
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
            )}
          </motion.section>
        ) }
    </WorkPage>
  );
};

export default Work;

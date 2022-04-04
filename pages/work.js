import { motion } from "framer-motion";
import { Work } from "./styled/work.styled";
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

const work = () => {
  const router = useRouter()
  
  const showProject = (project) => {
    router.push(`work/${project.path}`)
  }
  return(
    <Work>
        {projectsArray.map((projectGroup, groupIndex) => 
          <motion.section>
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
    </Work>
  );
};

export default work;

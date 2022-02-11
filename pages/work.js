import { motion } from "framer-motion";
import { Work } from "./styled/work.styled";
import { useState } from "react"

const projectsArray = [
  [1,2,3],
  [4,5,6,7],
  [8,9,10]
]
let i = 0

const work = () => {

  const projectVariant = {
    hidden: {
      x: "100vw"
    },
    visible: index => ({
      x: 0,
      rotate: 360,
      transition: {
        duration: 1,
        delay: index * 0.5,
        ease: "easeOut"
      }
    })
  }
  return(
    <Work>
        {projectsArray.map((projectGroup, groupIndex) => 
          <motion.section>
            {projectGroup.map((project, index) => 
              <motion.div
                variants={projectVariant}
                initial="hidden"
                animate="visible"
                custom={index}
              >

              </motion.div>
            )}
          </motion.section>
        ) }
    </Work>
  );
};

export default work;

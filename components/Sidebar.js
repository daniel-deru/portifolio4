import { SidebarStyle } from "./styled/Sidebar.styled"

import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import { SiReplit, SiCodewars } from "react-icons/si"

import { motion } from "framer-motion"

const Sidebar = () => {

  const sideBarVariants = {
    hidden: {
        x: "-200%",
        transition: {
          when: "afterChildren"
        }
    },
    visible: {
      x: 0,
      transition: {
        delay: 2.4,
      }
    }
  }

  

  return <SidebarStyle
            variants={sideBarVariants}
            initial="hidden"
            animate="visible"
          >
            {[
            <FaCodepen />, 
            <FaGithub />,  
            <FaYoutube />, 
            <SiReplit />, 
            <SiCodewars />
            ].map((icon, index) => 
            <motion.div
              className="icon-container"
              custom={index}
            >
              {icon}
            </motion.div>)}
        </SidebarStyle>
}

export default Sidebar

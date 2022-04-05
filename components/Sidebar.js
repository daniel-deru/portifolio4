import { SidebarStyle } from "./styled/Sidebar.styled"

import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import { SiReplit, SiCodewars } from "react-icons/si"

import { motion, AnimatePresence } from "framer-motion"

const Sidebar = () => {

  const iconArray = [
    <FaCodepen />, 
    <FaGithub />,  
    <FaYoutube />, 
    <SiReplit />, 
    <SiCodewars />
    ]

  const sideBarVariants = {
    hidden: {
        x: "-200%",
        opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        opacity: {
          duration: 2
        }

      }
    },
    leave: {
      x: '-200%',
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        opacity: {
          duration: 2
        }

      }
    }
  }

  // const iconVariant = {
  //   hidden: {
  //     x: "-400%"
  //   },
  //   visible: index => ({
  //     x: 0,
  //     transition: {
  //       delay: 2.6 + (index * 0.3)
  //     }
  //   })
  // }

  return <AnimatePresence>
            <SidebarStyle
            key="sidebar"
              variants={sideBarVariants}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
            {iconArray.map((icon, index) => 
              <motion.div
                key={index}
                className="icon-container"
                // custom={index}
                // variants={iconVariant}
                // initial="hidden"
                // animate="visible"
              >
                {icon}
              </motion.div>)}
              </SidebarStyle>
        </AnimatePresence>
}

export default Sidebar

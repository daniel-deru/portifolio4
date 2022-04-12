import { SidebarStyle } from "./styled/Sidebar.styled"

import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import { SiReplit, SiCodewars } from "react-icons/si"

import { motion, AnimatePresence } from "framer-motion"

const Sidebar = () => {

  const iconArray = [
    {
      icon: <FaCodepen />,
      url: "https://codepen.io/daniel-deru"
    },
    {
      icon: <FaGithub />, 
      url: "https://github.com/daniel-deru"
    },
    {
      icon: <FaYoutube />, 
      url: "https://www.youtube.com/channel/UC-c15g_qvx6j4hQ5U5Rc-aw"
    },
    {
      icon:  <SiReplit />, 
      url: "https://replit.com/@daniel-deru"
    },
    {
      icon:  <SiCodewars />,
      url: "https://www.codewars.com/users/danielIsAwesomeAtCoding"
    }
     
     
    
   
   
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
                <a href={icon.url}>
                  {icon.icon}
                </a>
              </motion.div>)}
              </SidebarStyle>
        </AnimatePresence>
}

export default Sidebar

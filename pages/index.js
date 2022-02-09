import { HomeStyle } from './styled/index.styled'
import { motion } from "framer-motion"
import { namePathArray, introPathArray } from '../public/svgPaths'

export default function Home() {

  const textVariant = {
    hidden: {
      strokeDashoffset: "100%",
      fill: "rgba(0, 0, 0, 0.00001)",
      strokeWidth: 4
    },
    visible: color => ({
      strokeDashoffset: 0,
      fill: color,
      strokeWidth: 0,
      transition: {
        duration: 3,
        delay: 1.5,
        fill: {
          delay: 4,
          duration: 2
        },
        strokeWidth: {
          delay: 6,
          duration: 0.5
        }
      }

    })
  }

  return (
    <HomeStyle>
      <div className='home-container'>

        <div>
          <div>
            <svg width="639" height="100" viewBox="0 0 639 100">
              {namePathArray.map((path, index) => <motion.path 
                d={path} 
                stroke="8" 
                stroke="#0080DC"
                strokeDasharray="100%"
                fill="transparent"

                variants={textVariant}
                initial="hidden"
                animate="visible"
                custom={"#0080DC"}
              
              />)}
            </svg>
          </div>

          <div>
                <svg width="1219" height="108" viewBox="0 0 1219 108">
                  {introPathArray.map(path => <motion.path 
                      d={path} 
                      stroke="8" 
                      stroke="white"
                      strokeDasharray="100%"
                      fill="transparent"
      
                      variants={textVariant}
                      initial="hidden"
                      animate="visible"
                      custom={"white"}
                  />)}
                </svg>
          </div>
        </div>

        <div>
          <button className="cta">Check Out My Work</button>
        </div>

      </div>
    </HomeStyle>
  )
}

import { HomeStyle } from './styled/index.styled'
import { motion } from "framer-motion"

export default function Home() {

  const textVariant = {
    hidden: {
      storkeDashoffset: 200,
    },
    visible: {
      storkeDashoffset: 0,
      transition: {
        duration: 1
      }

    }
  }

  return (
    <HomeStyle>
      <div className='home-container'>

        <div>
          <div>
            <svg width={450} height={90} className="name">
              <motion.text 
                x={10} 
                y={70} 
                strokeWidth={3}
                pathLength="100"
                strokeDasharray="100"

                variants={textVariant}
                initial="hidden"
                animate="visible"
              >
                Hi, I'm Daniel. 
              </motion.text>
            </svg>
          </div>

          <div>
            <svg width={800} height={90} className="intro">
              <motion.text 
                x={10} 
                y={70} 
                strokeWidth={3}
              >
                Welcome To My Portfolio.
              </motion.text>
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

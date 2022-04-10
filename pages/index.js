import { useState, useEffect} from "react"
import { HomeStyle } from './styled/index.styled'
import { motion } from "framer-motion"
import SVG from '../components/SVG'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  const buttonVariant = {
    hidden: {
      opacity: 0,

    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },    
    }
  }

  const checkWidth = () => {
    setIsMobile(false)
    if(window.innerWidth < 1000) setIsMobile(true)
  }


  useEffect(() => {
    checkWidth()
    window.addEventListener('resize', () => checkWidth())
  }, [])
  return (
    <HomeStyle>
      <div className='home-container'>

        <div>
          {isMobile ? <div className="mobile-name">Hi, I'm Daniel.</div> : <SVG name="name"/> }
          {isMobile ? <div className="mobile-intro" >Welcome to my portfolio</div> : <SVG name="intro"/>}
        </div>

        <div>
          <motion.button 
            className="cta"

            variants={buttonVariant}
            initial="hidden"
            animate="visible"
          
          >Check Out My Work</motion.button>
        </div>

      </div>
    </HomeStyle>
  )
}

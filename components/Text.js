import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
const Text = (props) => {
  const [box, setBox] = useState()
  const textRef = useRef()

  const textVariant = {
    hidden: {
      strokeDashArray: "100%",
      strokeDashOffset: "100%",
      // pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      strokeDashArray: 0,
      strokeDashArray: "100%",
      // pathLength: 1,
      fillOpacity: 1,
      transition: {
        delay: 1
      }
    }
  }

  useEffect(() => {

    let {y, x, width, height} = textRef.current.getBBox()
    setBox({y, x, width, height})
    
  }, [textRef])

  return (
    <motion.svg width={box?.width + 10} height={box?.height}>
        <motion.text 
          variants={textVariant}
          initial="hidden"
          animate="visible"

          stroke={props?.stroke} 
          strokeWidth={props?.strokeWidth} 
          fontFamily={props?.fontFamily} 

          fontSize={props?.fontSize} 
          y={-(box?.y)} 
          fill={props?.fill}

          ref={textRef} 
        >
          {props.children}
        </motion.text>
    </motion.svg>
  )
};

export default Text;

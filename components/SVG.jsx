import { useState, useEffect } from "react"
import { SVGComponent } from "./styled/SVG.styled"
import { motion } from "framer-motion"
import { introPathArray, introPathArrayMedium, namePathArray, namePathArrayMedium } from "../public/svgPaths"

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
          delay: 3.5,
          duration: 1
        },
        strokeWidth: {
          delay: 4,
          duration: 0.5
        }
      }

    })
  }
const SVG = ({name}) => {
    const [namePath, setNamePath] = useState(namePathArray)
    const [introPath, setIntroPath] = useState(introPathArray)
    const [SVGPath, setSVGPath] = useState(namePath)
    const [SVGOptions, setSVGOptions] = useState({ width: "600", height: "100" })

    const checkSize = () => {
        name === "name" ? setSVGPath(namePath) : setSVGPath(introPath)
        if(window.innerWidth > 1000){
            setIntroPath(introPathArray)
            setNamePath(namePathArray)
            console.log("The window is larger than 1000")
            name === "name" ? setSVGOptions({ width: "639", height: "100" }) : setSVGOptions({ width: "882", height: "86" })
        }
        if(window.innerWidth <= 1000 && window.innerWidth >= 500){
            console.log("The window is smaller than 1000")
            setIntroPath(introPathArrayMedium)
            setNamePath(namePathArrayMedium)
            name === "name" ? setSVGOptions({width: "320", height: "51"}) : setSVGOptions({width: "440", height: "43"})
        }
    }
    useEffect(() => {
        
      checkSize()

    }, [])
    return (
        <SVGComponent>
            <svg 
                width={SVGOptions.width} 
                height={SVGOptions.height} 
                viewBox={`0 0 ${SVGOptions.width} ${SVGOptions.height}`}>
                {SVGPath.map(path => (
                    <motion.path
                        key={path}
                        d={path}
                        stroke={name === "name" ? "#0080DC": "#ffffff"}
                        strokeDasharray="100%"
                        fill="transparent"

                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        custom={name === "name" ? "#0080DC": "#ffffff"}
                    />
                ))}
            </svg>

        </SVGComponent>
    )
}

export default SVG
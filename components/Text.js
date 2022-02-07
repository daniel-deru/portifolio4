import { useRef, useEffect, useState, useLayoutEffect } from "react"
// { children, fontSize, fill, fontFamily }
const Text = (props) => {
  const [box, setBox] = useState()
  const textRef = useRef()

  useEffect(() => {

    let {y, x, width, height} = textRef.current.getBBox()
    setBox({y, x, width, height})
    
  }, [textRef])

  return (
    <svg width={box?.width + 10} height={box?.height}>
        <text 
        stroke={props?.stroke} 
        strokeWidth={props?.strokeWidth} 
        fontFamily={props?.fontFamily} 
        ref={textRef} 
        fontSize={props?.fontSize} 
        y={-(box?.y)} 
        fill={props?.fill}
        >
          {props.children}
        </text>
    </svg>
  )
};

export default Text;

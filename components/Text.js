import { useRef, useEffect, useState } from "react"

const Text = ({ children, fontSize, fill }) => {
  const [box, setBox] = useState()
  const textRef = useRef()

  useEffect(() => {

    let {y, x, width, height} = textRef.current.getBBox()
    setBox({y, x, width, height})
    
  }, [textRef])

  return (
    <svg width={box?.width + 10} height={box?.height}>
        <text ref={textRef} fontSize={fontSize} y={-(box?.y)} fill={fill}>{children}</text>
    </svg>
  )
};

export default Text;

import { useRef, useEffect, useState } from "react"

const Text = ({ children }) => {
  const [dimensions, setDimensions] = useState()
  const textRef = useRef()

  useEffect(() => {
    console.log(textRef)
    setDimensions({height: textRef.current.scrollHeight, width: textRef.current.clientWidth})
  }, [textRef])
  return (
    <svg width={dimensions.width} height={dimensions.height}>
        <text ref={textRef} y={dimensions.height}  fill="white">{children}</text>
    </svg>
  )
};

export default Text;

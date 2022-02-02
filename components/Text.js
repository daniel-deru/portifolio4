import styles from "../styles/Text.module.css"

import { useRef } from "react"

const Text = ({ children, width, height, y, className }) => {

  return (
    <svg height={height} width={width} className={`${styles.svg}`}>
        <text y={y}>{children}</text>
    </svg>
  )
};

export default Text;

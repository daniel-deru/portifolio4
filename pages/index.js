import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRef, useEffect } from "react"

import Text from '../components/Text'

export default function Home() {
  let svgDim = {
    height: 65,
    width: 410
  }
  const textRef = useRef()

  useEffect(() => {
    console.log(textRef.current.getBBox())
  }, [textRef])
  return (
    <section className={styles.home}>
      <div className={styles['home-container']}>
        <div>
          <svg className={styles.svg}>
            <text ref={textRef} className={styles.blue}>Hi, I'm </text>
            <text>Daniel </text>
            <text className={styles.blue}>.</text>
          </svg>
        </div>
        <div>
          <button>Check Out My Work</button>
        </div>
      </div>
    </section>
  )
}

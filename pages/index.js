import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRef, useEffect } from "react"

import Text from '../components/Text'

export default function Home() {

  return (
    <section className={styles.home}>
      <div className={styles['home-container']}>

        <div>

          <div>
            <Text fontSize={"4em"}>Hi, I'm Daniel.</Text>
          </div>

          <div>
            <Text fontSize={"3em"} fill={"white"}>Welcome To My Portifolio. </Text>
          </div>

        </div>

        <div>
          <button className={styles.cta}>Check Out My Work</button>
        </div>

      </div>
    </section>
  )
}

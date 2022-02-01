import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Text from '../components/Text'

export default function Home() {
  return (
    <div className={styles.container}>
      <Text>
        Hello
      </Text>
    </div>
  )
}

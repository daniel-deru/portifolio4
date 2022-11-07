import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

import { ThemeProvider } from "styled-components"

const theme = {
  mainColor: "#0080db",
  darkGrey: "#282828",
}

function MyApp({ Component, pageProps }) {
  return  <ThemeProvider theme={theme}>
            <Head>
                <title>Daniel de Ru Portfolio</title>
                <meta name="description" content="Daniel de Ru's software development portfolio."/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
}

export default MyApp

import '../styles/globals.css'
import Layout from '../components/Layout'

import { ThemeProvider } from "styled-components"

const theme = {
  mainColor: "#0080db",
  darkGrey: "#282828",
}

function MyApp({ Component, pageProps }) {
  return  <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
}

export default MyApp

import '../styles/globals.css'
import Layout from '../components/Layout'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Layout>
            <Component {...pageProps} />
        </Layout>
}

export default MyApp

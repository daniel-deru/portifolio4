// @refresh reset
import styles from "../styles/Sidebar.module.css"

import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import { SiReplit, SiCodewars } from "react-icons/si"

const Sidebar = () => {

  return <aside className={styles.container}>
            <FaCodepen />
            <FaGithub />
            <FaYoutube />
            <SiReplit />
            <SiCodewars />
        </aside>
}

export default Sidebar

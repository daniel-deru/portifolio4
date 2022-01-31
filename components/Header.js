import styles from "../styles/Header.module.css"
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter()
  return <header className={styles.header}>
            <div id="logo">
                <img src="logo.png" alt="" className={styles.logo} />
            </div>
            <nav>
                <ul className={styles.nav}>
                    <li >
                        <Link href="/work">
                            <a className={router.pathname == "/work" ? styles.active : styles.link}>Work</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/skills" >
                            <a className={router.pathname == "/skills" ? styles.active: styles.link}>Skills</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/about" >
                            <a className={router.pathname == "/about" ? styles.active: styles.link}>About</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/contact" >
                            <a className={router.pathname == "/contact" ? styles.active: styles.link}>Contact</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/resume" >
                            <a className={router.pathname == "/resume" ? styles.active: styles.link}>Resume</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        
};
export default Header;

import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderStyle } from "./styled/Header.styled";

const Header = () => {
    const router = useRouter()
  return <HeaderStyle>
            <div id="logo">
                <img src="logo.png" alt="" className="logo" />
            </div>
            <nav>
                <ul className="nav">
                    <li >
                        <Link href="/work">
                            <a className={router.pathname == "/work" ? "active" : "link"}>Work</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/skills" >
                            <a className={router.pathname == "/skills" ? "active" : "link"}>Skills</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/about" >
                            <a className={router.pathname == "/about" ? "active" : "link"}>About</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/contact" >
                            <a className={router.pathname == "/contact" ? "active" : "link"}>Contact</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/resume" >
                            <a className={router.pathname == "/resume" ? "active" : "link"}>Resume</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
        
};
export default Header;

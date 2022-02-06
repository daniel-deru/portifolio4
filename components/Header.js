import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderStyle } from "./styled/Header.styled";
import Text from "./Text";

const Header = () => {
    const router = useRouter()
  return <HeaderStyle>
            <div id="logo">
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"white"} fontSize={"40px"}>D</Text>
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"#0080db"} fontSize={"40px"}>J</Text>
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"white"} fontSize={"40px"}>d</Text>
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"white"} fontSize={"40px"}>R</Text>
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

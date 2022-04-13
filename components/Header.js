import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { HeaderStyle } from "./styled/Header.styled";
import {FaBars, FaTimes} from "react-icons/fa"
// import Image from "next/image";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const router = useRouter()
    const LINKS = ["Work", "Skills", "About", "Contact", "Resume"]

    const headerVariant = {
        hidden: {
            y: "-200%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1.5,
                opacity: {
                    duration: 2
                }
            }
        }
    }

    const menuVariant = {
        animate: right => ({
            right: right,
            transition: {
                ease: "linear"
            }
        })
    }
    const checkWidth = () => {
        setMenu(false)
        if(window.innerWidth <= 500) setMenu(true)
    }
    useEffect(() => {
        checkWidth()
        window.addEventListener("resize", () => checkWidth())
    }, [])
  return <HeaderStyle
            variants={headerVariant}
            initial="hidden"
            animate="visible"
         >
            <motion.div 
                id="logo"
            >
                <div className="wrapper">
                    <Link href="/">
                        <img 
                            src="/logo.png"
                            width={60}
                            height={30}
                            className="logo"
                        />
                    </Link>
                </div>

            </motion.div>
            <nav>
                <div onClick={() => setNavOpen(!navOpen)}>
                    {menu && (navOpen ? <FaTimes /> : <FaBars/>)}
                </div> 
                <motion.ul 
                className="nav"

                variants={menuVariant}
                animate="animate"
                custom={navOpen ? "-10px" : "100vw"}

                >
                    {LINKS.map(function(link, index){
                        let path = `/${link.toLocaleLowerCase()}`
                        return (
                            <motion.li  key={link} onClick={() => setNavOpen(!navOpen)}>
                                <Link href={path}>
                                    <a className={router.pathname == path ? "active" : "link"}>{link}</a>
                                </Link>
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </nav>
        </HeaderStyle>
        
};
export default Header;

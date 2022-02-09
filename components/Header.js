import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { HeaderStyle } from "./styled/Header.styled";
import Image from "next/image";

const Header = () => {
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
  return <HeaderStyle
            variants={headerVariant}
            initial="hidden"
            animate="visible"
         >
            <motion.div 
                id="logo"
            >
                <div className="wrapper">
                    <Image 
                        src="/logo.png"
                        width={60}
                        height={30}
                        className="logo"
                    />
                </div>

            </motion.div>
            <nav>
                <ul className="nav">
                    {LINKS.map(function(link, index){
                        let path = `/${link.toLocaleLowerCase()}`
                        return (
                            <motion.li  key={link}>
                                <Link href={path}>
                                    <a className={router.pathname == path ? "active" : "link"}>{link}</a>
                                </Link>
                            </motion.li>
                        )
                    })}
                </ul>
            </nav>
        </HeaderStyle>
        
};
export default Header;

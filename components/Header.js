import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { HeaderStyle } from "./styled/Header.styled";
import Text from "./Text";

const Header = () => {
    const router = useRouter()
    const LINKS = ["Work", "Skills", "About", "Contact", "Resume"]

    const logoAnim = {
        hidden: {
            y: "-100%",
            x: "30vw"
        },
        visible: {
            y: 0,
            x: 0,
            transition: {
                x: {
                    delay: 0.3
                }
            }
        }
    }

    const navVariants = {
        hidden: {
            transition: {
                when: "afterChildren"
            }
        },
        visible: {
            transition: {
                when: "beforeChildren",
                // staggerChildren: 0.3,
              }
        }
    }

    const items = {
        hidden: {
            x: "100vw"
        },
        visible: {
            x: 0,
            transition: {
                x: {
                    delay: 0.2
                }
            }
        }
    }
  return <HeaderStyle>
            <motion.div id="logo"
                variants={logoAnim}
                animate="visible"
                initial="hidden"
            >
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"white"} fontSize={"40px"}>D</Text>
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"#0080db"} fontSize={"40px"}>J</Text>
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"white"} fontSize={"40px"}>d</Text>
                <Text fill={"none"} fontFamily={"Audiowide"} strokeWidth={2} stroke={"white"} fontSize={"40px"}>R</Text>
            </motion.div>
            <nav>
                <motion.ul 
                className="nav"
                variants={navVariants}
                initial="hidden"
                animate="visible"
                >
                    {LINKS.map(function(link){
                        let path = `/${link.toLocaleLowerCase()}`
                        return (
                            <motion.li variants={items} key={link}>
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

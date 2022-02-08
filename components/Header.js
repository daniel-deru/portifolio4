import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { HeaderStyle } from "./styled/Header.styled";
import Image from "next/image";

const Header = () => {
    const router = useRouter()
    const LINKS = ["Work", "Skills", "About", "Contact", "Resume"]

    const logoVariants = {
        hidden: {
            x: "200%",
            y: "-200%"
        },
        visible: {
            x: 0,
            y: 0,
            transition: {
                x: {
                    delay: 0.3
                }
            }
        }
    }

    const items = {
        hidden: index => ({
            x: (index+1) * -80,
            y: "-10vh"
        }),
        visible: index => ({
            x: 0,
            y: 0,
            transition: {
                delay: (index+1) * 0.3,
                x: {
                    delay: (index+1) * 0.4
                }
            }
        })
    }
  return <HeaderStyle>
            <motion.div 
                id="logo"

                variants={logoVariants}
                initial="hidden"
                animate="visible"
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
                            <motion.li 
                                variants={items}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                key={link}
                            
                            >
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

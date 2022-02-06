import { SidebarStyle } from "./styled/Sidebar.styled"

import { FaCodepen, FaGithub, FaYoutube } from "react-icons/fa"
import { SiReplit, SiCodewars } from "react-icons/si"

const Sidebar = () => {

  return <SidebarStyle>
            <FaCodepen />
            <FaGithub />
            <FaYoutube />
            <SiReplit />
            <SiCodewars />
        </SidebarStyle>
}

export default Sidebar

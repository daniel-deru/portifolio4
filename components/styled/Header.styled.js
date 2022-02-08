import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px;
    height: 10vh;

.wrapper {
    margin-top: 20px;
}
.nav {
    display: flex;
    list-style-type: none;
}

.nav li {
    margin: 20px 10px;
    font-size: 1.2em;
}

.logo {
    width: 100px;
}

.active {
    color: white;
  }
  
.link {
    color: var(--main);
  }
  



`
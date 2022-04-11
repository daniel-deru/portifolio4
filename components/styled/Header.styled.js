import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderStyle = styled(motion.header)`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px;
    height: 10vh;
    position: relative;
    z-index: 10;

.wrapper {
    margin-top: 20px;
}
nav {
    position: relative;
    > div {
        position: relative;
        z-index: 20;
    }
}
.nav {
    display: flex;
    list-style-type: none;
    z-index: 10;
    
    @media (max-width: 500px) {
        width: 100vw;
        position: absolute;
        flex-direction: column;
        background-color: black;
        align-items: center;
        text-align: center;
        height: 100vh;
        top: 0;
    }

}

.nav li {
    z-index: 9999999;
    margin: 20px 10px;
    font-size: 1.2em;
}

.logo {
    width: 100px;

    &:hover {
        cursor: pointer;
    }
}

.active {
    color: white;
  }
  
.link {
    color: var(--main);
  }
  
svg {
    color: ${({theme}) => theme.mainColor};
    padding-top: 10px;
    font-size: 2.5em;
}


`
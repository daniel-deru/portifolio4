import styled from "styled-components";
import { motion } from "framer-motion"

export const SidebarStyle = styled(motion.aside)`

    display: flex;
    flex-direction: column;
    color:  var(--main);
    border-right: 2px solid white;
    height: calc(90vh - 6rem);
    width: 5vw;
    margin: 3rem 0px;
    justify-content: space-between;
    z-index: 0;
    position: relative;

    @media (max-width: 1000px) {
        width: 10vw;
    }

    @media (max-width: 700px) {
        width: 15vw;
    }

    @media (max-width: 500px) {
        z-index: 0;
        flex-direction: row;
        border-right: none;
        border-top: 2px solid white;
        width: 90vw;
        margin: 3rem auto 0px auto;
        height: 10vh;
    }

    & > * {
        font-size: 2em;
        margin: 20px auto;
       

    }

    a {
        color:  var(--main);
    }


`
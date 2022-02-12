import styled from "styled-components"

export const About = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 95vw;
    overflow: hidden;

    section {
        color: ${props => props.theme.mainColor};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: ${props => props.theme.darkGrey}; */
        background-color: rgba(40, 40, 40, 0.5);
        backdrop-filter: blur(5px);
        aspect-ratio: 1/1;
        width: 40vw;
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        font-size: 0.9em;
        line-height: 1.5em;
        text-align: center;
        overflow: hidden;
    }

    .about-head {
        font-size: 3em;
        margin-bottom: 20px;
        /* color: black; */
    }
    .about-content {
        line-height: 2em;
        color: white;
    }
`
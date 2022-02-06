import styled from "styled-components"

export const About = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 95vw;

    section {
        color: ${props => props.theme.mainColor};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.darkGrey};
        aspect-ratio: 1/1;
        width: 40vw;
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        font-size: 0.9em;
        line-height: 1.5em;
        text-align: center
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
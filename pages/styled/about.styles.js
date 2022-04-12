import styled from "styled-components"

export const About = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 95vw;
    overflow: hidden;

    @media (max-width: 750px) {
        flex-direction: column;
    }

    .wrapper {
        width: 40vw;
        @media (max-width: 750px) {
            margin: 20px auto;
            width: 300px;
        }
        @media (max-width: 350px) {
            margin: 20px auto;
            width: 200px;
        }
    }

    section {
        color: ${props => props.theme.mainColor};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(100, 100, 100, 0.2);
        backdrop-filter: blur(5px);
        aspect-ratio: 1/1;
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
        @media (max-width: 1000px) {
            font-size: 2em;
        }
        @media (max-width: 350px) {
            font-size: 1em;
        }
    }
    .about-content {
        line-height: 2em;
        color: white;
        padding: 10px;

        @media (max-width: 1000px) {
            font-size: 0.8em;
        }
        @media (max-width: 350px) {
            font-size: 0.5em;
        }
    }
`
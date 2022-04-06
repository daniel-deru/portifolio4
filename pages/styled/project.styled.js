import styled, { keyframes } from "styled-components"

const shapeAnim = keyframes`
    0% {
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
    }
    28% {
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
    }
    33% {
        clip-path: polygon(100% 25%, 100% 100%, 0 75%, 0 0);
    }
    61% {
        clip-path: polygon(100% 25%, 100% 100%, 0 75%, 0 0);
    }
    66% {
        clip-path: polygon(80% 0, 100% 100%, 0 100%, 20% 0);
    }
    95% {
        clip-path: polygon(80% 0, 100% 100%, 0 100%, 20% 0);
    }
    100% {
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
    }
`

export const ProjectPage = styled.main`
    width: 100vw;
    text-align: center;

    .link-container {
        margin: 2rem auto;
        display: flex;
        justify-content: space-evenly;
        a {
            color: ${({theme}) => theme.mainColor}
        }
    }
    .main-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: auto;
        place-items: center;
        .stack-container {
            width: 350px;
            aspect-ratio: 1/1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            position: relative;
            margin: auto;
            > * {
                position: absolute;
            }
        }

        p {
                line-height: 2rem;
                width: 80%;
        }

    }

    img {   
            margin: 8rem;
            width: 60vw;
            aspect-ratio: 16/9;
    }
`
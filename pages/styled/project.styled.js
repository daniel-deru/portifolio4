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
    .container {
        position: relative;
        aspect-ratio: 16/9;
        margin: auto;
        width: 60vw;
        background-color: ${({theme}) => theme.mainColor};
        animation: ${shapeAnim} 20s ease-in-out 2s infinite forwards;

        & > *{
            position: absolute;
        }

        img {
            width: 60vw;
            aspect-ratio: 16/9;
            top: 0;
            left: 0;
        }

        p {
            top: 50%;
            transform: translateY(-50%);
        }
    }
`
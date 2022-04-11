import styled, { keyframes } from "styled-components"

export const Orbit = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
    }

    &:last-child {
        margin-top: -100px;
    }
    .container {
        width: 250px;
        height: 250px;
        position: relative;
        @media (max-width: 1000px) {
            width: 200px;
            height: 200px;
        }
        @media (max-width: 700px) {
            width: 150px;
            height: 150px;
        }
        @media (max-width: 500px) {
            margin: 20px auto;
        }
    }

    .container div {
        position: absolute;
        color: white;
    }

    .container div:first-child {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--main);
    }

    #languages::after {
        content: "(Pull me left/right)";
        display: block;
        width: max-content;
        color: white;
        font-size: 0.75em;
        margin: auto;
    }
`
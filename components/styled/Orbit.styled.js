import styled, { keyframes } from "styled-components"

export const Orbit = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:last-child {
        margin-top: -100px;
    }
    .container {
        width: 250px;
        height: 250px;
        position: relative;
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
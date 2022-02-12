import styled from "styled-components";

export const Contact = styled.div`
    text-align: center;
    width: 95vw;
    margin-top: 1rem;

    .large {
        font-size: 4em;
    }

    .small {
        font-size: 2em;
        color: ${props => props.theme.mainColor};
    }

    .cta-container {
        display: flex;
        justify-content: space-evenly;
    }

    .cta-container div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: rgba(40, 40, 40, 0.4);
        backdrop-filter: blur(5px);
        width: 30vw;
        aspect-ratio: 1/1;
        text-align: center;
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

        & * {
            display: block;
            margin: 0px auto;
        }

        .icon {
            font-size: 4em;
            color: ${props => props.theme.mainColor};
        }

        button {
            font-size: 1.5em;
            background-color: transparent;
            color: white;
            border: 2px solid ${props => props.theme.mainColor};
            border-radius: 5px;
            padding: 9px  16px;
        }
    }

`
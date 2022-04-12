import styled from "styled-components";

export default styled.div`
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
        align-items: center;
        @media (max-width: 700px) {
           flex-direction: column;
        }

    }

    .cta-container > div {
        
        background-color: rgba(100, 100, 100, 0.2);
        backdrop-filter: blur(5px);
        width: 30vw;
        aspect-ratio: 1/1;
        text-align: center;
        
        @media (max-width: 700px) {
           width: 60vw;
        }
        @media (max-width: 350px) {
           width: 80vw;
        }

        & * {
            display: block;
            margin: 0px auto;
        }

        .content-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: auto;
           
        }

        .icon {
            font-size: 4em;
            color: ${props => props.theme.mainColor};
            @media (max-width: 900px) {
                font-size: 3em;
            }

            @media (max-width: 900px) {
                font-size: 2em;
            }
        }

        button {
            font-size: 1.5em;
            background-color: transparent;
            color: white;
            border: 2px solid ${props => props.theme.mainColor};
            border-radius: 5px;
            padding: 9px  16px;
            transition: 0.3s ease-out;
            cursor: pointer;

            @media (max-width: 1200px) {
                font-size: 1em;
            }

            @media (max-width: 900px) {
                padding: 6px  12px;
            }

            &:hover {
                background-color: ${({theme}) => theme.mainColor};
                box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.mainColor};
            }
        }
    }

`
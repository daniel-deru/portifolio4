import styled, { keyframes } from "styled-components"

const enterAnim = keyframes`
   from {
       opacity: 0;
   }
   to {
       opacity: 1;
   }
`

export default styled.main`
    width: 100vw;
    margin-top: 2rem;
    text-align: center;
    animation: ${enterAnim} 1s ease-in-out;
    height: 80vh;
    h1 {
        font-size: 2em;
    }

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

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
        
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

            .middle {
                top: 40%;
                left: 40%;
                transform: translate(-50%, -50%);

            }
        }

        p {
                /* line-height: 2rem; */
                width: 80%;
        }

    }

    img {   
            margin: 8rem;
            width: 60vw;
            aspect-ratio: 16/9;
    }
`
import styled from "styled-components";

export const LayoutStyle = styled.div`
    .main-container {
        display: flex;
        position: relative;
        z-index: 0;

        &:nth-child(2){
            height: fit-content;
        }
       
        @media (max-width: 500px) {
            flex-direction: column-reverse;
            justify-content: space-between;
            height: 100vh;
        }
    }
`
import styled from "styled-components"

export default styled.main`
    width: 90vw;
    margin: auto;
    iframe {
        height: 85vh;
        width: 100%;

        &::-webkit-scrollbar {
            width: 7px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.mainColor};
        }
        &::-webkit-scrollbar-track {
            background-color: lightgray;
        }
    }
`
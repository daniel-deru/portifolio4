import styled from "styled-components";

export const Work = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95vw;
    overflow: hidden;

 section {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

 section:nth-child(odd) {
    width: 60%;
}

 section div {
    display: grid;
    aspect-ratio: 1/1;
    width: 160px;
    background-color: var(--main);
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    text-align: center;
    place-items: center;
    cursor: pointer;
}
`
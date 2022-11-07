import styled from "styled-components";

export default styled.div`
    display: grid;
    justify-content: center;
    align-items: center; 
    grid-template-columns: 1fr 1fr;
    width: 60vw;
    margin: auto;
    /* overflow: hidden; */



 section {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 500px) {
        flex-direction: column;
    }
}


 section div {
    display: grid;
    aspect-ratio: 1/1;
    width: 200px;
    background-color: var(--main);
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    text-align: center;
    place-items: center;
    cursor: pointer;
    margin: 20px auto;

    @media (max-width: 1000px) {
        width: 100px;
    }
}
`
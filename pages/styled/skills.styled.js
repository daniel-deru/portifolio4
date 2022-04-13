import styled from "styled-components";

export default styled.div`
    width: 95vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;

    @media (max-width: 1000px) {
        font-size: 0.8em;
    }
    @media (max-width: 1000px) {
        height: 80vh;
    }

    @media (max-width: 500px) {
        height: 100vh;
    }

`
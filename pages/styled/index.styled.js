import styled from "styled-components";

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 95vw;

.home-container {
    color: white;
}

svg {
    font-size: 4em;
    border: 2px solid white;

}

.name {
        fill: none;
        text {
            stroke: white;
        }
}

.intro {
        /* fill: ${props => props.theme.mainColor}; */
        fill: none;
        text {
            /* stroke: ${props => props.theme.mainColor} */
        }
}


.cta {
    color: white;
    backdrop-filter: blur(5px);
    border: 2px solid var(--main);
    padding: 10px 30px;
    background-color: transparent;
    font-size: 1.5em;
    border-radius: 5px;
    margin-top: 3rem;
}
`
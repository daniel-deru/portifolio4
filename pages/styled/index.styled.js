import styled from "styled-components";

export default styled.div`
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
    font-size: 3em;
    /* border: 2px solid white; */

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

.mobile-name {
    font-size: 2em;
    color: ${({theme}) => theme.mainColor};

    @media (max-width: 500px) {
        text-align: center;
        margin-top: 2rem;
    }
}

.mobile-intro {
    font-size: 2em;
    @media (max-width: 500px) {
        text-align: center;
        margin-top: 2rem;
    }
}


.cta {
    display: block;
    color: white;
    /* backdrop-filter: blur(5px); */
    border: 2px solid var(--main);
    padding: 10px 30px;
    background-color: transparent;
    font-size: 1.5em;
    border-radius: 5px;
    margin-top: 3rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    opacity: 1;
    z-index: 1;
    &:hover {
        background-color: ${({theme}) => theme.mainColor};
        box-shadow: 0px 0px 7px 3px ${({theme}) => theme.mainColor};

    }

    @media (max-width: 500px) {
        margin: 3rem auto 0px auto;
    }
}
`
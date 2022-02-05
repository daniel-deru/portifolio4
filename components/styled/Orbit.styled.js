import styled from "styled-components"

export const Orbit = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:last-child {
        margin-top: -100px;
    }
    .container {
        width: 250px;
        height: 250px;
        position: relative;
    }

    .container div {
        position: absolute;
        color: white;
    }

    /* .container div:not(div:first-child){
        opacity: 0;
    } */

    .container div:first-child {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--main);
    }

    .container div:nth-child(2) {
        /* left: 75px; */
    }
    .container div:nth-child(3) {

    }
    .container div:nth-child(4) {

    }
    .container div:nth-child(5) {

    }
    .container div:nth-child(6) {

    }
    .container div:nth-child(7) {

    }

`
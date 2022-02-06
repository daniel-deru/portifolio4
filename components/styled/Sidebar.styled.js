import styled from "styled-components";

export const SidebarStyle = styled.aside`

    display: flex;
    flex-direction: column;
    color:  var(--main);
    border-right: 2px solid white;
    height: calc(90vh - 6rem);
    width: 5vw;
    margin: 3rem 0px;
    justify-content: space-between;


    & * {
        font-size: 2em;
        margin: 20px auto;
    }

`
import styled from "styled-components";

export default styled.div`
  width: 80%;
  margin: auto;
  /* margin-top: 3rem; */

  .ticker, .reverse {
    line-height: ${({theme}) => theme.skillContainerHeight};
    height: ${({theme}) => theme.skillContainerHeight};
  }

  .ticker {
    position: relative;
    /* border: 1px solid white; */
    overflow: hidden;
  }

  .track {
    white-space: nowrap;
  }

  .item {
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    background-color: ${({theme}) => theme.mainColor};
    height: 100px;
    line-height: 100px;
    display: inline-block;
    width: ${({itemWidth}) => itemWidth+"px"};
    text-align: center;

    /* &:nth-child(odd) {
      border-bottom: 1px solid ${({theme}) => theme.mainColor};
      border-top: 1px solid ${({theme}) => theme.mainColor};
    }
    &:nth-child(even) {
      color: ${({theme}) => theme.mainColor};
    } */
  }

  /* .reverse {
    height: 100px;
  } */

  .reverse .track {
    position: absolute;
    right: 0px;
  }

`
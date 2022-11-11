import styled from "styled-components";

export default styled.div`
  width: 80%;
  margin: auto;
  box-shadow: inset 20px 0 15px -15px ${({theme}) => theme.mainColor},
              inset -20px 0 15px -15px ${({theme}) => theme.mainColor};

  .ticker, .reverse {
    line-height: ${({theme}) => theme.skillContainerHeight};
    height: ${({theme}) => theme.skillContainerHeight};
  }

  .ticker {
    position: relative;
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
    margin-right: ${({itemMargin}) => itemMargin+"px"};

  }

  .reverse .track {
    position: absolute;
    right: 0px;
  }

`
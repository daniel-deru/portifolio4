import styled from "styled-components";

export default styled.div`
  .ticker {
    position: relative;
    /* height: 206px; */
    height: 100px;
    width: 505px;
    border: 1px solid white;
    overflow: hidden;
  }

  .track:not(.reverse .track) {
    /* left: 0; */
    white-space: nowrap;
  }

  .item {
    display: inline-block;
    /* margin: 10px; */
    width: 100px;
    text-align: center;
  }

  .reverse {
    height: 100px;
  }

  .reverse .track {
    white-space: nowrap;
    position: absolute;
    right: 0px;
    

  }

`
// export default styled.div`
//     width: 95vw;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     overflow: hidden;

//     @media (max-width: 1000px) {
//         font-size: 0.8em;
//     }
//     @media (max-width: 1000px) {
//         height: 80vh;
//     }

//     @media (max-width: 500px) {
//         height: 100vh;
//     }

// `
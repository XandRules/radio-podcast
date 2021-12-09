import styled from "styled-components";

export const Container = styled.div`
  margin-top: -12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;

  .card {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 2px 23px #26395338;

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }

  .topCard {
    padding: 20px;
    margin-left: 120px;

    h2 {
      padding: 10px;
      margin: 10px;
    }
  }

  .mediaCard {
    height: 400px;
    width: 600px;
    padding-left: 20px;

    ul {
      margin-left: 200px;

      #title-podcast {
        margin-left: 15px;
      }
    }

    .img-podcast {
      width: 200px;
    }

    .img-bottom {
      margin-top: 20px;
      margin-left: 180px;
    }

    .slider {
      flex: 8;
      -webkit-appearance: none;
      width: 80%;
      height: 8px;
      border-radius: 5px;
      background: #efefef;
      cursor: pointer;
    }

    .value {
      flex: 1;
      font-size: 2rem;
      margin-left: 480px;
      margin-top: -35px;
    }
  }

  .bottomCard {
    padding: 20px;
    margin: 0;

    button {
      font-size: 1rem;
      color: #fff;
      background: #6933ff;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;
      margin-left: -35px;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

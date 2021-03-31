import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 150px;
  margin-left: 30%;
  margin-right: 30%;

  h1 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 50px;
  }

  @media (max-width: 1150px) {
    margin-left: 25%;
    margin-right: 25%;
  }

  @media (max-width: 770px) {
    margin-left: 15%;
    margin-right: 15%;
  }

  @media (max-width: 360px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

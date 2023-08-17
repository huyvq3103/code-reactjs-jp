import styled from "styled-components";
export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #d8d8d8;

  margin: 30px;

  @media only screen and (max-width: 420px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const WrapperButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

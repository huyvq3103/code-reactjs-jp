import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #7f7f7f;
  /* margin: 10px; */
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  .title-header {
    font-size: 20px;
    color: white;
  }

  .icon-menu {
    margin-right: 10px;
  }
`;
export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  .icon-list {
    margin: 13px;
  }
  .icon-file {
    font-size: 30px;
  }
  .header-container-page3 {
    display: flex;
    width: 100%;
  }

  .icon-lists {
    font-size: 30px;
  }
  .container-page3 {
    width: 100%;
    display: flex;
    background-color: #bfbfbf;
    color: white;
  }
  .container-page4 {
    width: 100%;
    display: flex;
    background-color: #bfbfbf;
    color: white;
  }

  @media only screen and (max-width: 350px) {
    .container-page3 {
      max-width: 100%;
    }
    .container-page4 {
      max-width: 100%;
    }
  }
`;

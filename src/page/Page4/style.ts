import styled from "styled-components";
export const ContainerPage4 = styled.div`
  width: auto;
  margin: 10px;
  .table-container-page4 {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
  }
  .title-mid-page4 {
    /* width: 100%; */
    height: 50px;
    background-color: #7f7f7f;
    color: #ffffff;
    align-items: center;
    padding-left: 15px;
  }
  .title-label-mid-page4 {
    padding: 12px;
    margin-top: 7px;
  }
  .title-label-mid {
    padding: 12px;
  }
  .title-mid {
    /* width: 100%; */
    height: 40px;
    background-color: #7f7f7f;
    color: #ffffff;
    align-items: center;
    padding-left: 15px;
  }
  /* .context-container-page4 {
    width: auto;
    margin: 10px;
  } */
  .group-input-page4 {
    margin: 20px 0;
    width: 100%;
    .input-row-page4 {
      display: flex;
      margin-bottom: 3px;
      width: 100%;
      max-width: 100%;
      .label-inputs-page4 {
        width: 120px;
        padding: 5px;
      }
      .inputs-wrapper-page4 {
        max-width: 180px;
        .input-box-page4 {
          background-color: #feffcc;
          width: 100%;
          height: 25px;
        }
      }
    }
  }
  .options {
    width: 100px;
    height: 30px;
    background-color: #feffcc;
  }

  .group-input-mid {
    width: 100%;
    padding-top: 5px;
    display: flex;
    .input-row-mid {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 250px;
      width: 100%;
      margin-left: 15px;
      .label-option-mid {
        display: flex;
        justify-content: center;
        width: 50px;
      }
      .option-mid {
        max-width: calc(100% - 50px);
        width: calc(100% - 50px);
        height: 30px;
        background-color: #feffcc;
      }
    }
    .label-inputs-mid {
      width: 100px;
      display: flex;
      justify-content: center;
    }
  }
  .inputs-wrapper-mid {
    max-width: calc(100% - 100px);
    width: calc(100% - 100px);
    .input-box-mid {
      background-color: #feffcc;
      width: calc(100% - 8px);
      min-width: 150px;
      height: 25px;
    }
  }
  .input-mid {
    display: flex;
    max-width: 500px;
    width: 100%;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
  }
  .button-mid {
    border-radius: 10px;
    min-width: 100px;
    width: 100px;
    background-color: #d8d8d8;
    margin-left: 10px;
    height: 37px;
  }
  .box-wrapper {
    width: 175px;
    height: 120px;
    background-color: #d8d8d8;
    .image-box {
      object-fit: cover;
    }
  }
  .box-container {
    padding-top: 10px;
    width: 100%;
    display: flex;
    .box-wrapper-container {
      /* background-color: red; */
      width: calc(25% - 10px);
      max-width: 215px;
      margin-right: 10px;
      .box-inside {
        display: flex;
        .button-wrapper-left {
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          .button-left-page4 {
            width: 27px;
            height: 27px;
            background-color: #7f7f7f7f;
            position: relative;
          }
        }
      }
    }
  }
  .box-text {
    display: flex;
    .font-size-text {
      font-size: 10px;
      .text-center {
        text-align: center;
      }
    }
    .fix-context {
      padding-left: 20px;
    }
  }
  .footer-page4 {
    width: 100%;
    height: 50px;
    margin-top: 10px;

    .button-footer1-page4 {
      width: 100px;
      height: 40px;
      border-radius: 10px;
      background-color: #d8d8d8;
    }
    .button-footer2-page4 {
      width: 100px;
      height: 40px;
      border-radius: 10px;
      float: right;
      background-color: #d8d8d8;
      .click-button-page4 {
        color: black;
      }
    }
  }

  @media only screen and (max-width: 541px) {
    .inputs-wrapper-page4 {
      width: 100%;
      max-width: 100% !important;
    }
    .options {
      width: 50%;
      max-width: 50% !important;
      height: 30px;
    }
  }

  @media only screen and (max-width: 700px) {
    .group-input-mid {
      flex-direction: column;
      .input-row-mid {
        width: calc(100% - 50px);
        max-width: calc(100% - 50px);
      }
    }
    .inputs-wrapper-mid {
      max-width: 100%;
      width: 100%;
      .input-box-mid {
        width: 100%;
        max-width: 100%;
        height: 50px;
        margin: 8px;
      }
    }
    .input-mid {
      display: block;
      max-width: calc(100% - 35px);
      .label-inputs-mid {
        padding-top: 10px;
      }
    }
    .button-mid {
      align-self: flex-end;
      height: 40px;
    }

    .box-box-inside {
      border: 1px solid;
    }

    .box-box-inside {
      display: none;
    }
    .box-wrapper {
      width: 100% !important;
      height: 150px;
    }
    .none-text {
      display: none;
    }
    .box-wrapper-container {
      padding-top: 10px;
    }
    .box-container {
      .box-wrapper-container {
        width: 50%;
        max-width: 50%;
      }
      .box-wrapper-container:nth-child(3) {
        display: none;
      }
      .box-wrapper-container:nth-child(4) {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .box-wrapper-container {
      width: 50%;
    }
    .box-container {
      flex-direction: column;
      .box-wrapper-container {
        width: 100%;
        max-width: 400px;
      }
      .box-wrapper-container:nth-child(3) {
        display: none;
      }
      .box-wrapper-container:nth-child(4) {
        display: none;
      }
    }
  }
`;

export const ContainerTableOption = styled.div`
  max-width: 100%;
  width: 100%;
  padding-top: 5px;
  .row {
    display: flex;
    width: 100%;
    max-width: 100%;
  }
  .column-header-id {
    background-color: #7f7f7f;
    border: 1px solid black;
    text-align: center;
    width: 5%;
  }
  .column-header-option {
    background-color: #7f7f7f;
    border: 1px solid black;
    text-align: center;
    width: 10%;
  }

  .column-footer-option {
    background-color: #feffcc;
    border: 1px solid black;
    text-align: center;
    width: 10%;
  }

  .select-field {
    background-color: #feffcc;
    border: 1px solid black;
    width: 100%;
    border: none;
    align-items: center;
    .select-option {
      align-items: center;
    }
  }
  select {
    text-align-last: center;
  }

  .column-middle-wrapper {
    display: flex;
    text-align: center;
    width: 100%;
    .column-content-number {
      border: 1px solid black;
      text-align: center;
      width: 30%;
    }
    .column-content-name {
      border: 1px solid black;
      text-align: center;
      width: 70%;
    }
    .column-header-number {
      background-color: #7f7f7f;
      border: 1px solid black;
      text-align: center;
      width: 30%;
    }
    .column-header-name {
      background-color: #7f7f7f;
      border: 1px solid black;
      text-align: center;
      width: 70%;
    }
    .column-footer-number {
      background-color: #feffcc;
      border: 1px solid black;
      text-align: center;
      width: 30%;
    }
    .column-footer-name {
      background-color: #feffcc;
      border: 1px solid black;
      text-align: center;
      width: 70%;
    }
  }

  @media only screen and (max-width: 541px) {
    .column-middle-wrapper {
      /* background-color: red; */

      display: block;
      .column-header-number {
        width: 100%;
      }
      .column-header-name {
        width: 100%;
      }
      .column-footer-number {
        width: 100%;
      }
      .column-footer-name {
        width: 100%;
      }
      .column-content-number {
        width: 100%;
      }
      .column-content-name {
        width: 100%;
      }
    }
    .column-footer-option {
      width: 20%;
    }
    .column-header-option {
      width: 20%;
    }
  }
`;

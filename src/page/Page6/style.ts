import styled from "styled-components";

export const ContainerContextPage6 = styled.div`
  margin: 10px;
  .context-container-form-pg6 {
    display: flex;
    padding-top: 10px;
  }
  .context-form-left-pg6 {
    margin-bottom: 15px;
    width: 50%;
    .div-input-row {
      margin-bottom: 3px;
      width: 100%;
      display: flex;
      .div-label-inputs {
        width: 80px;
      }
    }

    .div-input-single {
      .div-input-box {
        width: calc(100% - 8px);
        background-color: #feffcc;
        height: 25px;
      }
    }
    .div-inputs-single1 {
      max-width: 100px;
      width: 100%;
    }
  }
  .title-mid-page6 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    background-color: #7f7f7f;
    width: auto;
    color: #ffffff;
  }

  .input-box1 {
    width: 50px;
    background-color: #feffcc;
    height: 25px;
  }
  .input-box2 {
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-box3 {
    width: 52px;
    background-color: #feffcc;
    height: 25px;
  }

  .context-form-right-pg6 {
    width: 50%;
    .div-input-row {
      margin-bottom: 3px;
      width: 100%;
      display: flex;
      .div-label-inputs {
        width: 80px;
      }
    }
  }

  .input-and-button-wrapper-pg6 {
    display: flex;
    .input-pg6 {
      height: 25px;
      background-color: #feffcc;
    }
    .button-pg6 {
      margin: 3px;
      width: 27px;
      height: 27px;
      background-color: #7f7f7f7f;
    }
  }
  .div-input-box {
    width: calc(100% - 8px);
    background-color: #feffcc;
    height: 25px;
  }

  .button-page6 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 150px;
    align-items: center;

    .button-left-page6 {
      width: 55px;
      height: 25px;
      background-color: #d8d8d8;
      color: #010101;
    }
    .button-right-page6 {
      width: 55px;
      height: 25px;
      background-color: #d8d8d8;
      color: #010101;
    }
  }
  .div-inputs-wrapper {
    display: flex;
  }
  .input-single1 {
    display: flex;
  }
  .div-input-row-button {
    display: flex;
  }
  .div-label-inputs {
    width: 80px;
  }
  .div-input-single {
    max-width: 155px;
    width: 100%;
  }
  @media only screen and (max-width: 541px) {
    .context-container-form-pg6 {
      flex-wrap: wrap;
    }
    .context-form-left-pg6 {
      width: 100%;
    }
    .context-form-right-pg6 {
      width: 100%;
    }
    .div-input-row {
      width: 100% !important;
      max-width: none !important;
    }
    .div-input-box {
      width: calc(100% - 8px) !important;
    }
    .div-input-single {
      width: 100% !important;
      max-width: none !important;
    }
    .div-inputs-wrapper {
      width: 100%;
    }

    .div-inputs-wrapper {
      width: 100% !important;
      flex-wrap: wrap;
    }
    .input-box1 {
      width: 100%;
      max-width: 150px !important;
    }
    .input-box2 {
      max-width: 200px;
    }
    .input-box3 {
      width: 100%;
      max-width: 150px;
    }
    .input-single1 {
      width: 100%;
      max-width: 300px;
    }
    .input-and-button-wrapper-pg6 {
      width: 100%;
      gap: 10px;
    }
    .input-basic-pg6 {
      width: 100%;
    }
    .input-pg6 {
      max-width: 400px !important;
      width: 100%;
    }
    .div-input-row-button {
      width: 100% !important;
      .button-page6 {
        display: flex;
        justify-content: space-between;
        max-width: 100%;
      }
    }
  }
`;
export const ContainerTable11 = styled.div`
  max-width: 650px;
  width: 100%;
  padding-top: 5px;

  .table11-row1 {
    display: flex;
    .row1-column1 {
      width: 10%;
      min-width: 100px;
      background-color: #7f7f7f;
    }
    .row1-column2 {
      width: 20%;
      min-width: 150px;
      border: 1px solid black;
      background-color: #7f7f7f;
    }
    .row1-column3 {
      background-color: #7f7f7f;
      width: 35%;
      min-width: 200px;
      border: 1px solid black;
    }
    .row1-column4 {
      display: flex;
      width: 34%;
      min-width: 202px;
      background-color: #7f7f7f;
      .column4-row1 {
        width: 50%;
        min-width: 75px;
        border: 1px solid black;
      }
      .column5-row1 {
        width: 50%;
        min-width: 123px;
        border: 1px solid black;
      }
    }
  }

  .table11-row2 {
    display: flex;
    .row2-column1 {
      width: 10%;
      min-width: 100px;
      background-color: #7f7f7f;
    }
    .row2-column2 {
      width: 20%;
      min-width: 150px;
      background-color: #7f7f7f;
      border: 1px solid black;
    }
    .row2-column3 {
      width: 35%;
      min-width: 200px;
      background-color: #7f7f7f;
      border: 1px solid black;
    }
    .row2-column4 {
      width: 35%;
      min-width: 200px;
      background-color: #7f7f7f;
      border: 1px solid black;
    }
  }
  .table11-row3 {
    display: flex;
    .row3-column1 {
      width: 10%;
      min-width: 100px;
      background-color: #7f7f7f;
    }
    .row3-column2 {
      width: 20%;
      min-width: 150px;
      background-color: #7f7f7f;
      border: 1px solid black;
    }
    .row3-column3 {
      width: 35%;
      min-width: 200px;
      background-color: #7f7f7f;

      display: flex;
      .column4-row3 {
        width: 50%;
        min-width: 75px;
        border: 1px solid black;
      }
      .column5-row3 {
        width: 50%;
        min-width: 123px;
        border: 1px solid black;
      }
    }
    .row3-column4 {
      width: 35%;
      min-width: 204px;
      display: flex;
      background-color: #7f7f7f;

      .column6-row3 {
        width: 50%;
        min-width: 123px;
        border: 1px solid black;
      }
      .column7-row3 {
        width: 50%;
        min-width: 75px;
        border: 1px solid black;
      }
    }
  }
  @media only screen and (max-width: 670px) {
    .table11 {
      width: 100%;
    }
  }
`;

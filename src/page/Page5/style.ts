import styled from "styled-components";
export const ContainerPage5 = styled.div`
  margin: 10px;

  .table-container-page5 {
    display: flex;
    padding: 5px;
    width: 100%;
  }
  .context-container-page5 {
    margin: 10px;
  }
  .title-mid-page5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    background-color: #7f7f7f;
    width: auto;
    color: #ffffff;
  }
  .box-text-pg5 {
    display: flex;
    .font-size-text-pg5 {
      font-size: 10px;
      .text-center-pg5 {
        text-align: center;
      }
    }
    .fix-context-pg5 {
      padding-left: 20px;
    }
  }
  .footer-page5 {
    display: flex;
    justify-content: space-between;
    .button-left {
      width: 70px;
      height: 30px;
      border-radius: 10px;
      background-color: #d8d8d8;
    }
    .button-right {
      width: 70px;
      height: 30px;
      border-radius: 10px;
      background-color: #d8d8d8;
    }
  }

  @media only screen and (max-width: 541px) {
    .table-container-page5 {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;

export const ContainerTable3 = styled.div`
  max-width: 250px;
  width: 100%;
  padding-top: 5px;
  .table3-row {
    display: flex;
  }
  .border-table3-column1 {
    width: 150px;
    background-color: #7f7f7f;
    border: 1px solid black;

    align-items: center;
    display: flex;
    .border-table3-column2 {
      width: calc(100% - 150px);
      text-align: right;
      border: 1px solid black;
    }
    @media only screen and (max-width: 541px) {
      .table3 {
        padding-top: 15px;
        max-width: 100%;
        padding-left: 20px;
        width: calc(100% - 20px);
      }
    }
  }
`;
export const ContainerTable4 = styled.div`
  max-width: 600px;
  width: 100%;
  padding-top: 5px;
  .table4-row {
    display: flex;
  }
  .border-table4-column1 {
    width: 150px;
    background-color: #7f7f7f;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .border-table4-column2 {
    width: calc(100% - 150px);
    text-align: right;
    border: 1px solid black;
    background-color: #feffcc;
  }
`;

export const ContainerTable5 = styled.div`
  max-width: 600px;
  width: 100%;
  padding-top: 5px;
  .container-table5 {
    display: flex;
  }
  .border-table5-column1 {
    width: 80px;
    background-color: #7f7f7f;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .border-table5-column2 {
    width: 100px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    background-color: #feffcc;
    padding: 0 5px;
    .button-table-page5 {
      .button-table-column {
        width: 20px;
        height: 20px;
        background-color: #7f7f7f7f;
      }
    }
  }
  .border-table5-column3 {
    width: calc(100% - 200px);
    padding-left: 5px;
    border: 1px solid black;
    background-color: #feffcc;
  }
  .border-table5-row1 {
    width: calc(100% - 84px);
    border: 1px solid black;
    background-color: #feffcc;
  }
  @media only screen and (max-width: 541px) {
    .button-table-column {
      display: none;
    }
  }
`;
export const ContainerTable6 = styled.div`
  max-width: 600px;
  width: 100%;
  padding-top: 5px;
  .container-table6 {
    display: flex;
  }
  .border-table6-column1 {
    width: 80px;
    background-color: #7f7f7f;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .border-table6-column2 {
    width: 100px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    background-color: #feffcc;
    padding: 0 5px;
    .button-table-page6 {
      .button-table-column {
        width: 20px;
        height: 20px;
        background-color: #7f7f7f7f;
      }
    }
  }
  .border-table6-column2-nocolor {
    width: 100px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;

    padding: 0 5px;
  }
  .border-table6-column3-nocolor {
    width: calc(100% - 200px);
    padding-left: 5px;
    border: 1px solid black;
  }
  .border-table6-column3 {
    width: calc(100% - 200px);
    padding-left: 5px;
    border: 1px solid black;
    background-color: #feffcc;
  }
  .border-table6-row1 {
    width: calc(100% - 84px);
    border: 1px solid black;
    background-color: #feffcc;
  }
  .border-table6-row2 {
    width: calc(100% - 84px);
    border: 1px solid black;
  }
  @media only screen and (max-width: 541px) {
    .mobie-table6-column2 {
      width: calc(100% - 92px);
    }
    /* .mobie-table6-column2 {
    display: none;
  } */
    .border-table6-column2 {
      width: calc(100% - 92px);
    }
    .mobie-column2-row3 {
      width: 150px;
    }

    .none-column {
      display: none;
    }
    .mobie-column3-row3 {
      width: calc(100% - 250px);
      background-color: white;
    }
    .mobie-column2-row5 {
      width: 150px;
    }
    .mobie-column3-row5 {
      width: calc(100% - 250px);
      background-color: white;
    }
  }
`;
export const ContainerTable7 = styled.div`
  max-width: 600px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 10px;
  .container-table7 {
    display: flex;
  }
  .border-table7-column1 {
    width: 80px;
    height: 30px;
    background-color: #7f7f7f;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .border-table7-row1 {
    width: calc(100% - 84px);
    border: 1px solid black;
    height: 30px;
    align-items: center;
    display: flex;
    background-color: #feffcc;
  }
`;
export const ContainerTable8 = styled.div`
  display: flex;
  padding-bottom: 10px;

  .table8 {
    max-width: 500px;
    width: 100%;
    padding-top: 5px;
    .row1 {
      display: flex;

      .row1-column1 {
        width: 15%;
        min-width: 50px;
        background-color: #7f7f7f;
        border: 1px solid black;
      }
      .row1-column2 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 35%;
        min-width: 100px;
      }
      .row1-column3 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 15%;
        min-width: 50px;
      }
      .row1-column4 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 15%;
        min-width: 50px;
      }
      .row1-column5 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 20%;
        min-width: 70px;
      }
    }
  }

  .row2 {
    display: flex;
    width: 100%;
    height: 30px;
    .row2-column1 {
      width: 15%;
      min-width: 50px;
      background-color: #7f7f7f;
      border: 1px solid black;
      display: flex;
      .button-table8 {
        width: 50%;
        color: white;
        min-width: 35px;
        background-color: #7f7f7f7f;
        .border-input-column {
          border: 1px solid black;
          background-color: #ababab;
          color: black;
          width: 100%;
        }
      }
      .row2-column1-right {
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: white;
        width: 50%;
        min-width: 15px;
      }
    }
    .row2-column2 {
      background-color: white;
      border: 1px solid black;
      width: 35%;
      min-width: 100px;
      align-items: center;
      display: flex;
    }
    .row2-column3 {
      background-color: #feffcc;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;

      justify-content: center;
    }
    .row2-column4 {
      background-color: #feffcc;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;
      justify-content: center;
    }
    .row2-column5 {
      background-color: #feffcc;
      border: 1px solid black;
      width: 20%;
      min-width: 70px;
      align-items: center;
      justify-content: center;
    }
  }

  .row3 {
    display: flex;
    width: 100%;
    height: 30px;
    .row3-column1 {
      width: 15%;
      align-items: center;
      justify-content: center;
    }
    .row3-column2 {
      min-width: calc(37% - 5px);
      justify-content: flex-end;
      display: flex;
      .title-row3-column2 {
        padding: 0 10px;
        align-items: center;
        justify-content: center;
      }
    }
    .row3-column3 {
      background-color: #7f7f7f;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;
      justify-content: center;
    }
    .row3-column4 {
      background-color: #7f7f7f;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;
      justify-content: center;
    }
    .row3-column5 {
      background-color: #7f7f7f;
      border: 1px solid black;
      width: 20%;
      min-width: 70px;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 670px) {
    display: flex;
    flex-wrap: wrap;
    .table8 {
      width: 100%;
    }
    .none-column {
      display: none;
    }
    .table8 {
      width: 100%;
      .row1-column1 {
        width: 30% !important;
      }
      .row1-column2 {
        width: 50% !important;
      }
      .row1-column3 {
        width: 20% !important;
      }
    }
    .row2-column1 {
      width: 30% !important;
    }
    .row2-column2 {
      width: 50% !important;
    }
    .row2-column3 {
      width: 20% !important;
    }
    .row3-column1 {
      width: 30% !important;
    }
    .row3-column2 {
      width: 50% !important;
    }
    .row3-column3 {
      width: 20% !important;
    }
  }

  .table9 {
    max-width: 500px;
    width: 100%;
    padding-top: 5px;
    .row1-table9 {
      display: flex;
      width: 100%;
      .row1-column1-table9 {
        width: 10%;
        min-width: 40px;
        background-color: #7f7f7f;
        border: 1px solid black;
      }
      .row1-column2-table9 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 40%;
        min-width: 110px;
      }
      .row1-column3-table9 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 15%;
        min-width: 50px;
      }
      .row1-column4-table9 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 15%;
        min-width: 50px;
      }
      .row1-column5-table9 {
        background-color: #7f7f7f;
        border: 1px solid black;
        width: 20%;
        min-width: 70px;
      }
    }
  }

  .row2-table9 {
    display: flex;
    width: 100%;
    height: 30px;
    .row2-column1-table9 {
      width: 10%;
      min-width: 40px;
      background-color: #7f7f7f;
      border: 1px solid black;
    }
    .row2-column2-table9 {
      background-color: white;
      border: 1px solid black;
      width: 40%;
      align-items: center;

      min-width: 110px;
    }
    .row2-column3-table9 {
      background-color: #feffcc;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;

      justify-content: center;
    }
    .row2-column4-table9 {
      background-color: #feffcc;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;

      justify-content: center;
    }
    .row2-column5-table9 {
      background-color: #feffcc;
      border: 1px solid black;
      width: 20%;
      min-width: 70px;
      align-items: center;

      justify-content: center;
    }
  }

  .row3-table9 {
    display: flex;
    width: 100%;
    height: 30px;
    .row3-column1-table9 {
      width: 10%;
      min-width: 40px;
    }
    .row3-column2-table9 {
      width: 40%;
      min-width: 110px;
      justify-content: flex-end;
      display: flex;
      .title-row3-column2-table9 {
        padding: 0 10px;
        align-items: center;

        justify-content: center;
      }
    }
    .row3-column3-table9 {
      background-color: #7f7f7f;
      border: 1px solid black;
      width: 14%;
      min-width: 50px;
      align-items: center;

      justify-content: center;
    }
    .row3-column4-table9 {
      background-color: #7f7f7f;
      border: 1px solid black;
      width: 15%;
      min-width: 50px;
      align-items: center;

      justify-content: center;
    }
    .row3-column5-table9 {
      background-color: #7f7f7f;
      border: 1px solid black;
      width: 20%;
      min-width: 70px;
      align-items: center;

      justify-content: center;
    }
  }
  @media only screen and (max-width: 670px) {
    .none-column {
      display: none;
    }
    .table9 {
      width: 100%;
      .row1-column1-table9 {
        width: 15% !important;
      }
      .row1-column2-table9 {
        width: 55% !important;
      }
      .row1-column3-table9 {
        width: 30% !important;
      }
    }
    .row2-column1-table9 {
      width: 15% !important;
    }
    .row2-column2-table9 {
      width: 55% !important;
    }
    .row2-column3-table9 {
      width: 30% !important;
    }
    .row3-column1-table9 {
      width: 15% !important;
    }
    .row3-column2-table9 {
      width: 55% !important;
    }
    .row3-column3-table9 {
      width: 30% !important;
    }
    .column-height {
      display: flex;
      width: 100%;
      height: 0;
    }
  }
`;

export const ContainerTable10 = styled.div`
  max-width: 400px;
  width: 100%;
  padding-top: 5px;
  padding-left: 10px;
  .row1-table10 {
    display: flex;
    .button-table10 {
      width: 10%;
      border: 1px solid black;
      background-color: #7f7f7f;
      .border-input-column-table10 {
        width: 100%;
        border: 1px solid black;
        background-color: #ababab;
        color: black;
      }
    }
  }
  .row1-column2-table10 {
    width: 40%;
    background-color: #7f7f7f;
    border: 1px solid black;
  }
  .row1-column3-table10 {
    width: 50%;
    border: 1px solid black;
  }

  @media only screen and (max-width: 670px) {
    .table10 {
      width: 100%;
      max-width: 100%;
      .button-table10 {
        width: 15% !important;
      }
      .row1-column2-table10 {
        width: 35% !important;
      }
      .row1-column3-table10 {
        width: calc(50% - 15px) !important;
      }
    }
  }
`;
export const ContainerImg = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  .box-wrapper-container {
    width: calc(25% - 10px);
    max-width: 215px;
    margin-right: 10px;
  }
  .box-wrapper {
    width: 100%;
    height: 120px;
    background-color: #d8d8d8;
  }
  .box-text-pg5 {
    display: flex;
  }
  .font-size-text-pg-5 {
    font-size: 10px;
  }
  .fix-context {
    padding-left: 20px;
    font-size: 10px;
  }
  .image-box {
    object-fit: cover;
  }
  .box-container {
    display: flex;
  }
  .box-wrapper-container {
    width: calc(25% - 10px);
  }

  @media only screen and (max-width: 700px) {
    .box-wrapper-container {
      width: 50%;
      max-width: 50%;
      padding-top: 10px;
    }
    .box-box-inside {
      border: 1px solid black;
    }
    .box-wrapper-container:nth-child(3) {
      display: none;
    }
    .box-wrapper-container:nth-child(4) {
      display: none;
    }
    .image-box {
      width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    .box-wrapper-container {
      max-width: 400px;
      width: 100%;
      /* .box-wrapper-container:nth-child(3) {
        display: none;
      }
      .box-wrapper-container:nth-child(4) {
        display: none;
      } */
    }
  }
`;

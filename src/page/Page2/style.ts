import styled from "styled-components";

export const ContainerPage2 = styled.div`
  width: auto;
  min-height: calc(100vh - 90px);
  height: calc(100vh - 90px);
  padding: 10px;

  .header-container {
    width: 100%;
  }

  .context-form-container {
    min-height: calc(100% - 29px) !important;
    height: calc(100% - 29px) !important;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .context-form-container::-webkit-scrollbar {
    display: none;
  }
  .form-container {
    min-height: calc(100% - 70px);
    padding-top: 10px;
  }
  .footer {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    .button1 {
      width: 100px;
      height: 40px;
      border-radius: 10px;
    }
    .button2 {
      width: 100px;
      height: 40px;
      border-radius: 10px;
      float: right;
    }
  }
  .header {
    width: 100%;
    background-color: #333;
    color: #ffffff;
    display: flex;
    justify-content: space-between;

    font-size: 24px;
  }
  nav a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
    margin-inline-start: 10px;
  }
  .icon-menu {
    color: white;
    font-size: 24px;
  }
  nav a:hover {
    color: #f1c40f;
  }
  .tagA {
    font-size: 24px;
  }
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    margin-right: 20px;
  }
  .form-basic {
    display: flex;
  }
  .form-gap-basic {
    width: 100px;
    padding: 5px;
  }

  .flexform {
    display: flex;
  }
  .bgcolor {
    background-color: #feffcc;
    width: 300px;
  }
  .group-inputs {
    margin-bottom: 15px;
  }

  .input-row {
    margin-bottom: 3px;
    width: 100%;
    display: flex;
    .label-inputs {
      width: 100px;
    }
    .inputs-wrapper {
      display: flex;
      width: 100%;
      .input-and-button-wrapper {
        display: flex;
        .input-basic {
          width: 150px;
        }
        .button-input-wrapper {
          margin: 0px 10px 0px 2px;
        }
      }

      .input-single {
        max-width: 150px;
        width: 100%;
      }
      .input-long {
        max-width: 300px;
        width: 100%;
      }
    }
    .input-box {
      width: calc(100% - 8px);
      background-color: rgb(254, 255, 204);
      height: 25px;
    }
  }
  .input-only {
    max-width: 300px;
    width: 100%;
  }
  .button {
    margin: 3px;
    width: 27px;
    height: 27px;
    background-color: #7f7f7f7f;
  }

  @media only screen and (max-width: 420px) {
    .inputs-wrapper {
      flex-wrap: wrap;
      .input-and-button-wrapper {
        .input-basic {
          width: 100%;
        }
        .button-input-wrapper {
          margin: 0 0 0 5px !important;
        }
      }
      .input-single {
        width: 100% !important;
        max-width: none !important;
      }
    }

    .fontSize {
      font-size: 12px;
    }
    .bgcolor {
      background-color: rgb(254, 255, 204);
      width: 230px;
    }
  }

  .form-input-end {
    padding-top: 10px;
  }
  .footer {
    width: 100%;
  }
  .input-row {
    .label-inputs {
      min-width: 100px;
    }
  }
  .tagA {
    font-size: 24px;
  }
`;

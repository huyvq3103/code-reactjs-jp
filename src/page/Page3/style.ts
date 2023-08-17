import styled from "styled-components";
export const ContainerPage3 = styled.div`
  width: auto;
  .header {
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
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    margin-right: 20px;
  }
  .table-boder-one {
    background-color: #7f7f7f;
    color: white;
    text-align: center;
  }
  .table-container {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    padding-top: 20px;
  }
  .table-two {
    margin-inline-start: 30px;
  }
  .table-two-colum2 {
    width: 150px;
  }
  .title-label-mid {
    padding: 12px;
  }
  .title-mid {
    /* width: 100%; */
    height: 50px;
    background-color: #7f7f7f;
    color: #ffffff;
    align-items: center;
    padding-left: 15px;
  }
  .item-buttons {
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
  }
  .title-bottom {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    background-color: #7f7f7f;
    color: #ffffff;
  }

  .button-page3 {
    margin-right: 15px;
    justify-content: space-between;
    width: 150px;
    height: 40px;
    margin-bottom: 5px;
    background-color: #d9d9d9;
  }
  .button-1-page3 {
    margin-right: 15px;
    justify-content: space-between;
    width: 150px;
    height: 40px;
    margin-bottom: 5px;
    background-color: #a6a6a6;
  }
  /* .table1{
max-width: 250px;
width: 100%;

 border: 1px solid #7f7f7f;
  margin-right: 20px;

}
.table2{
  max-width: 250px;
  width: 100%; 
} */

  .border-table1 {
    width: calc(100% - 125px);

    border: 1px solid #7f7f7f;
  }
  .border-table2 {
    width: 75px;

    border: 1px solid #7f7f7f;
  }
  .border-table3 {
    width: calc(100% - 125px);

    border: 1px solid #7f7f7f;
  }
  .border-table5 {
    width: calc(100% - 50px);

    border: 1px solid #7f7f7f;
  }
  .border-table-column1 {
    width: 125px;
    background-color: #7f7f7f;
    border: 1px solid black;
  }
  .border-table-column2 {
    width: 50px;
    background-color: #7f7f7f;
    border: 1px solid black;
  }
  .border-table2-column1 {
    width: 100px;
    background-color: #7f7f7f;
    border: 1px solid black;
    text-align: center;
  }
  .border-table2-column2 {
    width: calc(100% - 100px);

    border: 1px solid black;
  }

  @media only screen and (max-width: 541px) {
    .table-container {
      padding-top: 20px;
    }
    .table2 {
      padding-top: 15px;
      max-width: 100%;
    }
    .table1 {
      margin-right: 0;
      max-width: 100%;
    }
    .item-buttons {
      min-width: 450px;
    }
  }
`;

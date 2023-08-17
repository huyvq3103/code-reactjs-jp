import styled from "styled-components";

export const ContainerTable1 = styled.div`
  max-width: 250px;
  width: 100%;
  margin-right: 20px;
  .border-table-column1 {
    width: 125px;
    background-color: #7f7f7f;
    border: 1px solid black;
  }
  .border-table1 {
    width: calc(100% - 125px);

    border: 1px solid #7f7f7f;
  }
  .border-table-column2 {
    width: 50px;
    background-color: #7f7f7f;
    border: 1px solid black;
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
  @media only screen and (max-width: 541px) {
    .table1 {
      margin-right: 0;
      max-width: 100%;
    }
  }
`;

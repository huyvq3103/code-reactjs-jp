import styled from "styled-components";

export const ContainerTable2 = styled.div`
  max-width: 250px;
  width: 100%;
  .border-table2-column1 {
    width: 100px;
    background-color: #7f7f7f;
    border: 1px solid black;
    text-align: center;
  }
  .table2-row {
    display: flex;
  }
  .border-table2-column2 {
    width: calc(100% - 100px);

    border: 1px solid black;
  }
  @media only screen and (max-width: 541px) {
    .table2 {
      padding-top: 15px;
      max-width: 100%;
    }
  }
`;

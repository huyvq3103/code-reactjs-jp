import React from "react";
import { ContainerTable3 } from "./style";

const Table3 = () => {
  return (
    <ContainerTable3>
      <div className="table12-row1">
        <div className="table12-row1-column1"></div>
        <div className="table12-row1-column2"></div>
        <div className="table12-row1-column3"></div>
        <div className="table12-row1-column4">
          <div className="table12-column4-row1"></div>
          <div className="table12-column5-row1">理見積</div>
        </div>
      </div>
      <div className="table12-row2">
        <div className="table12-row2-column1">
          <div className="button-table12-row2">理</div>
        </div>
        <div className="table12-row2-column2"></div>
        <div className="table12-row2-column3">開</div>
        <div className="table12-row2-column4"></div>
      </div>
      <div className="table12-row3">
        <div className="table12-row3-column1"></div>
        <div className="table12-row3-column2">開</div>
        <div className="table12-row3-column3"></div>
        <div className="table12-row3-column4">
          <div className="table12-column4-row3"></div>
          <div className="table12-column5-row3">理見積</div>
        </div>
      </div>
    </ContainerTable3>
  );
};

export default Table3;

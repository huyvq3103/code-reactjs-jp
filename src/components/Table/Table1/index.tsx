import React from "react";
import { ContainerTable1 } from "./style";

const Table1 = () => {
  return (
    <ContainerTable1>
      <div style={{ display: "flex" }}>
        <div className="border-table-column1">別紙</div>
        <div className="border-table1">別理</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="border-table-column1 border-table-column2">別紙</div>
        <div className="border-table1 border-table2">別紙修理</div>
        <div className="border-table3">別紙修理</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="border-table-column1 border-table-column2">別紙</div>
        <div className=" border-table1 border-table2">別紙修理</div>
        <div className=" border-table1 border-table3">別紙修理</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="border-table-column1 border-table-column2">修理</div>
        <div className="border-table1 border-table2">別紙修理</div>
        <div className="border-table1 border-table3">別紙修理</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="border-table-column1 border-table-column2">ア発</div>

        <div className="border-table1 border-table5">アプリ開発</div>
      </div>
    </ContainerTable1>
  );
};

export default Table1;

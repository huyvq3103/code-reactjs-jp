import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { ContainerPage3 } from "./style";
import Table1 from "@components/Table1";
import Table2 from "@components/Table2";
const Page3 = () => {
  return (
    <ContainerPage3>
      <div className="context-container">
        <div className="table-container">
          <Table1 />
          <Table2 />
        </div>
        <div className="content-mid">
          <div className="title-mid">
            <div className="title-label-mid">別紙修理見積</div>
          </div>
          <div className="item-buttons">
            <button className="button-1-page3">
              <Link to="/page4">成アプ</Link>
            </button>

            <button className="button-page3">リ開発</button>

            <button className="button-page3">理見積書</button>

            <button className="button-page3">別紙修</button>

            <button className="button-page3">理見積書</button>

            <button className="button-page3">理見積書</button>
          </div>
        </div>

        <div className="content-bottom">
          <div
            className="title-bottom"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="title-label-mid">別紙修理見積</div>
            <div style={{ float: "right", color: "white", margin: 15 }}>
              <CaretDownOutlined
                className="icon-file"
                style={{ fontSize: 30 }}
              />
            </div>
          </div>
          <div className="item-buttons">
            <button className="button-page3">成アプ</button>

            <button className="button-page3">リ開発</button>

            <button className="button-page3">理見積書</button>

            <button className="button-page3">別紙修</button>
          </div>
        </div>
      </div>
    </ContainerPage3>
  );
};

export default Page3;

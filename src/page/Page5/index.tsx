import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  ContainerImg,
  ContainerPage5,
  ContainerTable10,
  ContainerTable3,
  ContainerTable4,
  ContainerTable5,
  ContainerTable6,
  ContainerTable7,
  ContainerTable8,
} from "./style";
import Table1 from "@components/Table1";
import Table2 from "@components/Table2";
const Page5 = () => {
  const datas = [
    {
      id: 1,
      img: "https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg",
    },
    {
      id: 2,
      img: "https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg",
    },
    {
      id: 3,
      img: "https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg",
    },
    {
      id: 4,
      img: "https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg",
    },
  ];
  return (
    <ContainerPage5>
      <div className="table-container-page5">
        <Table1 />

        <div style={{ display: "block", width: "100%" }}>
          <div>
            <Table2 />
          </div>
          <div>
            {/* <Table3 /> */}
            <ContainerTable3>
              <div className="table3-row">
                <div className="border-table3-column1">積書作成</div>
                <div className=" border-table3-column2">2.100</div>
              </div>
              <div className="table3-row">
                <div className="border-table3-column1">積書作成積書作成</div>
                <div className=" border-table3-column2">
                  <h4 style={{ textAlign: "right" }}>23.100</h4>
                </div>
              </div>
            </ContainerTable3>
          </div>
        </div>
      </div>

      {/* title */}
      <div className="title-mid-page5">
        <div className="title-label-mid">別紙修理見積</div>
        <div style={{ float: "right", color: "white", margin: 15 }}>
          <CaretDownOutlined className="icon-file" style={{ fontSize: 30 }} />
        </div>
      </div>
      {/* <Table4 /> */}
      <ContainerTable4>
        <div className="table4-row">
          <div className="border-table4-column1">積書作成</div>
          <div className=" border-table4-column2">2.100</div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="border-table4-column1">積書作成積書作成</div>
          <div className=" border-table4-column2">23.100</div>
        </div>
      </ContainerTable4>
      {/* <Table5 /> */}
      <ContainerTable5>
        <div className="container-table5">
          <div className="border-table5-column1">積書作成</div>
          <div className=" border-table5-row1">2.100</div>
        </div>
        <div className="container-table5">
          <div className="border-table5-column1">積書作成</div>
          <div className=" border-table5-column2">
            <div className="title-table-table5-column2">23.100</div>
            <div className="button-table-page5">
              <button type="button" className="button-table-column"></button>
            </div>
          </div>
          <div className="border-table5-column3">積書作成</div>
        </div>
        <div className="container-table5">
          <div className="border-table5-column1">積書作成</div>
          <div className=" border-table5-column2">
            <div className="title-table-table5-column2">20.200</div>
            <div className="button-table-page5">
              <button type="button" className="button-table-column"></button>
            </div>
          </div>
          <div className="border-table5-column3">積書作成</div>
        </div>
        <div className="container-table5">
          <div className="border-table5-column1">積書作成</div>
          <div className=" border-table5-column2">
            <div className="title-table-table5-column2">224100</div>
            <div className="button-table-page5">
              <button type="button" className="button-table-column"></button>
            </div>
          </div>
          <div className="border-table5-column3">積書作成</div>
        </div>
        <div className="container-table5">
          <div className="border-table5-column1">積書作成</div>
          <div className=" border-table5-column2">
            <div className="title-table-table5-column2">778100</div>
            <div className="button-table-page5">
              <button type="button" className="button-table-column"></button>
            </div>
          </div>
          <div className="border-table5-column3">積書作成</div>
        </div>

        <div className="container-table5">
          <div className="border-table5-column1">積書作成</div>
          <div className=" border-table5-column2">
            <div className="title-table-table5-column2">778100</div>
            <div className="button-table-page5">
              <button type="button" className="button-table-column"></button>
            </div>
          </div>
          <div className="border-table5-column3">積書作成</div>
        </div>
      </ContainerTable5>
      {/* <Table6 /> */}
      <ContainerTable6>
        <div className="container-table6">
          <div className="border-table6-column1">積書作成</div>
          <div className=" border-table6-column2  ">
            <div className="title-table-table6-column2">10000</div>
            <div className="button-table-page6">
              <button type="button" className="button-table-column"></button>
            </div>
          </div>
          <div className="border-table6-column3 none-column">積書作成</div>
        </div>

        <div className="container-table6">
          <div className="border-table6-column1">積書作成</div>
          <div className=" border-table6-row1">積書作成</div>
        </div>

        <div className="container-table6">
          <div className="border-table6-column1">積書作成</div>
          <div className=" border-table6-column2 mobie-column2-row3">
            <div className="title-table-table6-column2">10000</div>
            <div className="button-table-page6">
              {/* <button type="button" className="button-table-column"></button> */}
            </div>
          </div>
          <div className=" border-table6-column3 mobie-column3-row3">
            積書作成
          </div>
        </div>

        <div className="container-table6">
          <div className="border-table6-column1">積書作成</div>
          <div className=" border-table6-row2">積書作成</div>
        </div>

        <div className="container-table6">
          <div className="border-table6-column1">積書作成</div>
          <div className=" border-table6-column2-nocolor mobie-column2-row5">
            <div className="title-table-table6-column2">10000</div>
            <div className="button-table-page6">
              {/* <button type="button" className="button-table-column"></button> */}
            </div>
          </div>
          <div className="border-table6-column3-nocolor mobie-column3-row5">
            積書作成
          </div>
        </div>
      </ContainerTable6>
      {/* <Table7 /> */}
      <ContainerTable7>
        <div className="container-table7">
          <div className="border-table7-column1">積書作成</div>
          <div className=" border-table7-row1"></div>
        </div>
      </ContainerTable7>
      {/* title-label-mid */}
      <div className="title-mid-page5">
        <div className="title-label-mid">修理見積</div>
        <div style={{ float: "right", color: "white", margin: 15 }}>
          <CaretDownOutlined className="icon-file" style={{ fontSize: 30 }} />
        </div>
      </div>
      {/* <Table8 /> */}
      <ContainerTable8>
        <div className="table8">
          <div className="row1">
            <div className="row1-column1"></div>
            <div className="row1-column2">別理</div>
            <div className="row1-column3">別理</div>
            <div className="row1-column4 none-column">別理</div>
            <div className="row1-column5 none-column">別理</div>
          </div>
          <div className="row2">
            <div className="row2-column1">
              <button type="button" className="button-table8">
                <div className="border-input-column">修</div>
              </button>
              <div className="row2-column1-right">1</div>
            </div>
            <div className="row2-column2">別紙</div>
            <div className="row2-column3">別紙</div>
            <div className="row2-column4 none-column">別紙</div>
            <div className="row2-column5 none-column">別紙</div>
          </div>

          <div className="row2">
            <div className="row2-column1">
              <button type="button" className="button-table8">
                <div className="border-input-column">修</div>
              </button>
              <div className="row2-column1-right">1</div>
            </div>
            <div className="row2-column2">別紙</div>
            <div className="row2-column3">別紙</div>
            <div className="row2-column4 none-column">別紙</div>
            <div className="row2-column5 none-column">別紙</div>
          </div>

          <div className="row3">
            <div className="row3-column1"></div>
            <div className="row3-column2">
              <div className="title-row3-column2">別紙</div>
            </div>
            <div className="row3-column3">別紙</div>
            <div className="row3-column4 none-column">別紙</div>
            <div className="row3-column5 none-column">別紙</div>
          </div>
        </div>

        <div className="table9">
          <div className="row1-table9">
            <div className="row1-column1-table9"></div>
            <div className="row1-column2-table9">別理</div>
            <div className="row1-column3-table9">別理</div>
            <div className="row1-column4-table9 none-column">別理</div>
            <div className="row1-column5-table9 none-column">別理</div>
          </div>
          <div className="row2-table9">
            <div className="row2-column1-table9"></div>
            <div className="row2-column2-table9">別紙</div>
            <div className="row2-column3-table9">別紙</div>
            <div className="row2-column4-table9 none-column">別紙</div>
            <div className="row2-column5-table9 none-column">別紙</div>
          </div>

          <div className="row2-table9 column-height">
            <div className="row2-column1-table9 none-column"></div>
            <div className="row2-column2-table9 none-column">別紙</div>
            <div className="row2-column3-table9 none-column">別紙</div>
            <div className="row2-column4-table9 none-column">別紙</div>
            <div className="row2-column5-table9 none-column">別紙</div>
          </div>

          <div className="row3-table9">
            <div className="row3-column1-table9"></div>
            <div className="row3-column2-table9">
              <div className="title-row3-column2-table9">別紙</div>
            </div>
            <div className="row3-column3-table9">別紙</div>
            <div className="row3-column4-table9 none-column">別紙</div>
            <div className="row3-column5-table9 none-column">別紙</div>
          </div>
        </div>
      </ContainerTable8>

      <div className="title-mid-page5">
        <div className="title-label-mid">理見積修理見積</div>
        <div style={{ float: "right", color: "white", margin: 15 }}>
          <CaretDownOutlined className="icon-file" style={{ fontSize: 30 }} />
        </div>
      </div>

      {/* <Table10 /> */}
      <ContainerTable10>
        <div className="row1-table10">
          <button type="button" className="button-table10">
            <div className="border-input-column-table10">修</div>
          </button>
          <div className="row1-column2-table10">別紙</div>
          <div className="row1-column3-table10">別紙</div>
        </div>
      </ContainerTable10>

      <ContainerImg className="box-box-container">
        {datas.map((data) => {
          return (
            <div className="box-wrapper-container">
              <div className="box-inside box-box-inside">
                <div className="box-wrapper">
                  <img
                    src={data.img}
                    alt="img"
                    width={"100%"}
                    height={"100%"}
                    className="image-box"
                  />
                </div>
              </div>
              <div className="box-text-pg5">
                <div className="font-size-text-pg-5">
                  <div>成アプリ</div>
                  <div>成アプリ</div>
                </div>
                <div className="font-size-text-pg5 fix-context-pg5">
                  <div className="text-center-pg5">成アプリ開発</div>
                  <div>成アプリ開発成アプリ開発</div>
                  <div>成アプリ開発成アプリ開発</div>
                </div>
              </div>
            </div>
          );
        })}
      </ContainerImg>
      <div className="footer-page5">
        <button className="button-left">
          <div>開発成</div>
        </button>
        <div className="group-button-footer">
          <button className="button-right">
            <div>開発成</div>
          </button>
          <button className="button-right">
            <div>開発成</div>
          </button>
          <button className="button-right">
            <Link to="/page6">
              <div className="click-button-page4"> 開ア</div>
            </Link>
          </button>
        </div>
      </div>
    </ContainerPage5>
  );
};

export default Page5;

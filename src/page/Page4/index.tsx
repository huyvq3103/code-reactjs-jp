import React from "react";
import { Link } from "react-router-dom";
import { ContainerPage4, ContainerTableOption } from "./style";
import Table1 from "@components/Table1";
import Table2 from "@components/Table2";
const Page4 = () => {
  const datas = [
    {
      id: 1,
      number: 4545,
      name: "開発",
      option: 1,
    },
    {
      id: 2,
      number: 1124,
      name: "開発11",
      option: 1,
    },
  ];
  return (
    // <ContainerPage4>
    <ContainerPage4>
      <div className="table-container-page4">
        <Table1 />
        <Table2 />
      </div>
      <div className="content-mid">
        <div className="title-mid">
          <div className="title-label-mid">別紙修理見積</div>
        </div>
        <div className="group-input-page4">
          <div className="input-row-page4">
            <div className="label-inputs-page4">
              <span className="fontSize-page4"> 修理見積</span>
            </div>
            <div className="inputs-wrapper-page4">
              <input
                type="text"
                className="input-box-page4"
                placeholder="成アプリ開発"
              />
            </div>
          </div>
          <div className="input-row-page4">
            <div className="label-inputs-page4">
              <span className="fontSize-page4">紙修 </span>
            </div>
            <div className="inputs-wrapper-page4">
              <select className="options">
                <option value="0">1.0</option>
              </select>
            </div>
          </div>
        </div>
        <div className="title-mid">
          <div className="title-label-mid">見積作成ア</div>
        </div>
        {/* <TableOption /> */}

        <ContainerTableOption>
          <div className="row">
            <div className="column-header-id"></div>
            <div className="column-middle-wrapper">
              <div className="column-header-number">開発開発開発</div>
              <div className="column-header-name">開アプリ</div>
            </div>
            <div className="column-header-option">アプリ</div>
          </div>
          {datas.map((data) => {
            return (
              <>
                <div className="row">
                  <div className="column-header-id">{data.id}</div>
                  <div className="column-middle-wrapper">
                    <div className="column-content-number">{data.number}</div>
                    <div className="column-content-name">{data.name}</div>
                  </div>
                  <div className="column-footer-option">
                    <select className="select-field">
                      <option className="select-option" value="0">
                        {data.option}
                      </option>
                    </select>
                  </div>
                </div>
              </>
            );
          })}

          <div className="row">
            <div className="column-header-id">3</div>
            <div className="column-middle-wrapper">
              <div className="column-footer-number">発開発開発</div>
              <div className="column-footer-name">発開発開発</div>
            </div>
            <div className="column-footer-option"></div>
          </div>
        </ContainerTableOption>

        {/* title-mid */}
        <div className="title-mid">
          <div className="title-label-mid">見積</div>
        </div>

        <div className="group-input-mid">
          <div className="input-row-mid">
            <div className="label-option-mid">
              <span className="fontSize-page4">紙修 </span>
            </div>
            <select className="option-mid">
              <option value="0">見積作成ア見積作成ア</option>
            </select>
          </div>
          <div className="input-mid">
            <div className="label-inputs-mid">
              <span className="fontSize-page4">紙修ア見積作 </span>
            </div>
            <div className="inputs-wrapper-mid">
              <input
                type="text"
                className="input-box-mid"
                placeholder="成アプリ開発"
              />
            </div>
          </div>
          <button className="button-mid">修ア修ア修ア見見見</button>
        </div>

        {/* box */}
        <div className="box-container box-box-container">
          <div className="box-wrapper-container">
            <div className="box-inside box-box-inside">
              <div className="button-wrapper-left">
                <button type="button" className="button-left-page4"></button>
              </div>
              <div className="box-wrapper">
                <img
                  src="https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg"
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  className="image-box"
                />
              </div>
            </div>
            <div className="box-text">
              <div className="font-size-text">
                <div>成アプリ</div>
                <div>成アプリ</div>
              </div>
              <div className="font-size-text fix-context">
                <div className="text-center">成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
              </div>
            </div>
          </div>

          <div className="box-wrapper-container">
            <div className="box-inside box-box-inside">
              <div className="button-wrapper-left">
                <button type="button" className="button-left-page4"></button>
              </div>
              <div className="box-wrapper">
                <img
                  src="https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg"
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  className="image-box"
                />
              </div>
            </div>
            <div className="box-text none-text">
              <div className="font-size-text">
                <div>成アプリ</div>
                <div>成アプリ</div>
              </div>
              <div className="font-size-text fix-context">
                <div className="text-center">成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
              </div>
            </div>
          </div>

          <div className="box-wrapper-container">
            <div className="box-inside ">
              <div className="button-wrapper-left">
                <button type="button" className="button-left-page4"></button>
              </div>
              <div className="box-wrapper">
                <img
                  src="https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg"
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  className="image-box"
                />
              </div>
            </div>
            <div className="box-text">
              <div className="font-size-text">
                <div>成アプリ</div>
                <div>成アプリ</div>
              </div>
              <div className="font-size-text fix-context">
                <div className="text-center">成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
              </div>
            </div>
          </div>

          <div className="box-wrapper-container">
            <div className="box-inside">
              <div className="button-wrapper-left">
                <button type="button" className="button-left-page4"></button>
              </div>
              <div className="box-wrapper">
                <img
                  src="https://media.vneconomy.vn/images/upload/2021/12/29/iphone-13-pro-max.jpg"
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  className="image-box"
                />
              </div>
            </div>
            <div className="box-text">
              <div className="font-size-text">
                <div>成アプリ</div>
                <div>成アプリ</div>
              </div>
              <div className="font-size-text fix-context">
                <div className="text-center">成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
                <div>成アプリ開発成アプリ開発</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-page4">
        <button className="button-footer1-page4">
          <div>開発成</div>
        </button>
        <button className="button-footer2-page4">
          <Link to="/page5">
            <div className="click-button-page4"> 成アプリ開発成ア</div>
          </Link>
        </button>
      </div>
    </ContainerPage4>

    // </ContainerPage4>
  );
};

export default Page4;

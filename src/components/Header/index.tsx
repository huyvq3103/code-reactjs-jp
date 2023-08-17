import React, { useEffect, useRef, useState } from "react";
import {
  MenuOutlined,
  FileTextOutlined,
  UnorderedListOutlined,
  CameraOutlined,
  PictureOutlined,
  RollbackOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Wrapper, WrapperContainer } from "./style";

import { useLocation } from "react-router-dom";
import Camera from "../Camera";

const Header: React.FC = () => {
  const [pageTitle, setPageTitle] = useState("理見積書");

  let curLoc = useLocation();
  const titleMap = [
    { path: "/", title: "リ積書" },
    { path: "/page2", title: "開発発" },
    { path: "/page3", title: "別紙修リ開発" },
  ];
  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  return (
    <WrapperContainer>
      <Wrapper>
        {curLoc.pathname !== "/" && <MenuOutlined className="icon-menu" />}
        <div className="title-header">{pageTitle}</div>
      </Wrapper>
      {curLoc.pathname === "/page3" && (
        <div className="container-page3">
          <div className="header-container-page3">
            <div className="icon-list">
              <FileTextOutlined className="icon-file" />
              <p>File</p>
            </div>
            <div className="icon-list">
              <UnorderedListOutlined className="icon-lists" />
              <p>List</p>
            </div>
          </div>
        </div>
      )}

      {curLoc.pathname === "/page4" && (
        <div className="container-page4">
          <div className="header-container-page3">
            <div className="icon-list">
              <FileTextOutlined className="icon-file" />
              <p>File</p>
            </div>
            <div className="icon-list">
              <UnorderedListOutlined className="icon-lists" />
              <p>List</p>
            </div>
            {/* <div
              className="icon-list icon-camera"
              style={{ backgroundColor: "#bfbfbf" }}
            >
              <CameraOutlined
                className="icon-lists icon-cameras"
                style={{ paddingLeft: 10 }}
              />

              <p>Camera</p>
            </div> */}
            <Camera />

            <div className="icon-list icon-camera">
              <PictureOutlined
                className="icon-lists icon-cameras"
                style={{ paddingLeft: 10 }}
              />
              <p>Picture</p>
            </div>
          </div>
          <div className="icon-list icon-camera" style={{}}>
            <RollbackOutlined className="icon-lists icon-cameras" />
            <p>Back</p>
          </div>
        </div>
      )}

      {curLoc.pathname === "/page5" && (
        <div className="container-page3">
          <div className="header-container-page3">
            <div className="icon-list" style={{ paddingLeft: 10 }}>
              <ToolOutlined className="icon-file" />
              <div>別紙別</div>
            </div>
          </div>
        </div>
      )}

      {curLoc.pathname === "/page7" && (
        <div className="container-page3">
          <div
            className="header-container-page3"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="icon-list" style={{ paddingLeft: 10 }}>
              <RollbackOutlined className="icon-lists icon-cameras" />
              <p>Back</p>
            </div>
          </div>
        </div>
      )}
    </WrapperContainer>
  );
};

export default Header;

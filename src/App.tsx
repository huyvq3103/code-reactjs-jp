import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "antd";
import Header from "./components/Header";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";
import Page4 from "./page/Page4";
import Page5 from "./page/Page5";
import Page6 from "./page/Page6";
import Page7 from "./page/Page7";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
          <Route path="/page3" element={<Page3 />}></Route>
          <Route path="/page4" element={<Page4 />}></Route>
          <Route path="/page5" element={<Page5 />}></Route>
          <Route path="/page6" element={<Page6 />}></Route>
          <Route path="/page7" element={<Page7 />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

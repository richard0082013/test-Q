import React from "react";
import Header from "./Header";
import Content from "./Content";
import styled from "styled-components";
const AppOutterWrapper = styled.div`
  text-align: center;
`;
const Layout = () => (
  <AppOutterWrapper>
    <Header />
    <Content />
  </AppOutterWrapper>
);

export default Layout;

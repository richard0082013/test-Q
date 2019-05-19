import React from "react";
import { Route } from "react-router-dom";
import Home from "../container/Home";
import Faqs from "../container/Faqs";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  margin-bottom: 2rem;
`;
const Content = () => (
  <ContainerWrapper>
    <Route exact={true} path="/" component={Home} />
    <Route path="/faqs" component={Faqs} />
  </ContainerWrapper>
);

export default Content;

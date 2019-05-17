import React from "react";
import styled from "styled-components";

const OutterWrapper = styled.div`
  padding-top: 35px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  text-align: center;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
`;
const Alink = styled.a`
  display: block;
  padding-top: 35px;
`;
const Heading = "Qantas Cars";
const subHeading =
  "Powered by the sun with the best safety record on the planet";
const Home = () => (
  <OutterWrapper>
    <h1>{Heading}</h1>
    <h2>{subHeading}</h2>
    <Img
      src="https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L"
      alt="hero"
    />
    <Alink href="/faqs">Learn more</Alink>
  </OutterWrapper>
);

export default Home;

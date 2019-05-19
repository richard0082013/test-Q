import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
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

const Home = () => {
  const getHomePage = (
    <Query
      query={gql`
        {
          homepage {
            heading
            subheading
            heroImageUrl
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Something is Wrong, please contact Richard!</p>;
        return (
          <div>
            <h1>{data.homepage.heading}</h1>
            <h3>{data.homepage.subheading}</h3>
            <Img src={data.homepage.heroImageUrl} alt="hero" />
            <Alink href="/faqs">Learn more</Alink>
          </div>
        );
      }}
    </Query>
  );

  return <OutterWrapper>{getHomePage}</OutterWrapper>;
};

export default Home;

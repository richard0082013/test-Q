import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";
import FaqsContents from "../components/FaqsContents";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const OutterWrapper = styled.div`
  padding: 25px;
  margin-top: 50px;
`;
const Faqs = () => {
  const getFaqs = (
    <Query
      query={gql`
        {
          faqs {
            title
            body
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Something is Wrong, please contact Richard!</p>;
        return (
          <div>
            <Header as="h1" style={{ fontSize: "50px", marginBottom: "50px" }}>
              Faqs
            </Header>
            <FaqsContents faqs={data.faqs} />
          </div>
        );
      }}
    </Query>
  );
  return <OutterWrapper>{getFaqs}</OutterWrapper>;
};

export default Faqs;

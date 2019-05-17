import React from "react";
import { Grid, List } from "semantic-ui-react";
import styled from "styled-components";
const OutterWrapper = styled.div`
  padding: 25px;
  margin: 0 auto;
`;
const faqs = [
  {
    title: "How can I check my estimated delivery window?",
    body:
      "Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account."
  },
  {
    title:
      "When will I be invited to configure my Model 3, and when can I take delivery?",
    body:
      "<p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>"
  },
  {
    title: "Which Model 3 features are currently available?",
    body:
      "Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD."
  }
];
class Faqs extends React.Component {
  state = {
    currentList: [],
    currentMainContent: null
  };
  componentDidMount() {
    //call api, then set currentFaq  to real faq
    this.setState({
      currentList: faqs,
      currentMainContent: faqs[0].body
    });
  }
  handleOnClick = key => {
    const { currentList } = this.state;
    this.setState({
      currentMainContent: currentList[key].body
    });
  };
  render() {
    const { currentList, currentMainContent } = this.state;
    return (
      <OutterWrapper>
        <Grid columns={2}>
          <Grid.Column width={10}>{currentMainContent}</Grid.Column>
          <Grid.Column width={6}>
            <List bulleted link size="big">
              {currentList.map((cf, index) => (
                <List.Item
                  value="*"
                  as="a"
                  style={{ marginBottom: "20px" }}
                  onClick={() => this.handleOnClick(index)}
                  active={cf.body === currentMainContent}
                >
                  {cf.title}
                </List.Item>
              ))}
              {/* <List.Item as="a" style={{ marginBottom: "20px" }}>
                How can I check my estimated delivery window?
              </List.Item>
              <List.Item as="a" style={{ marginBottom: "20px" }}>
                When will I be invited to configure my Model 3, and when can I take
                delivery?
              </List.Item>
              <List.Item as="a" style={{ marginBottom: "20px" }}>
                Which Model 3 features are currently available?
              </List.Item> */}
            </List>
          </Grid.Column>
        </Grid>
      </OutterWrapper>
    );
  }
}

export default Faqs;

import React from "react";
import { Grid, List, Header } from "semantic-ui-react";
import styled from "styled-components";

const OutterWrapper = styled.div`
  padding: 25px;
  margin: 0 auto;
  width: 80%;
`;
class FaqsContents extends React.Component {
  state = {
    currentMainContent: this.props.faqs[0]
  };
  handleOnClick = key => {
    const { faqs } = this.props;
    this.setState({
      currentMainContent: faqs[key]
    });
  };
  render() {
    const { currentMainContent } = this.state;
    const { faqs } = this.props;
    return (
      <OutterWrapper>
        <Grid>
          <Grid.Row columns={2} only="computer tablet">
            <Grid.Column width={10} style={{ textAlign: "left" }}>
              <Header as="h3" style={{ fontSize: "24px" }}>
                {currentMainContent && currentMainContent.title}
              </Header>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                {currentMainContent && currentMainContent.body}
              </p>
            </Grid.Column>
            <Grid.Column width={6} style={{ textAlign: "left" }}>
              <List bulleted link size="big">
                {faqs.map((cf, index) => (
                  <List.Item
                    key={index}
                    as="a"
                    style={{ marginBottom: "20px" }}
                    onClick={() => this.handleOnClick(index)}
                    active={cf.title === currentMainContent.title}
                  >
                    {cf.title}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} only="mobile">
            <Grid.Column width={16} style={{ textAlign: "left" }}>
              <List bulleted link size="big">
                {faqs.map((cf, index) => (
                  <List.Item
                    key={index}
                    as="a"
                    style={{ marginBottom: "20px" }}
                    onClick={() => this.handleOnClick(index)}
                    active={cf.title === currentMainContent.title}
                  >
                    {cf.title}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width={16}>
              <h3>{currentMainContent && currentMainContent.title}</h3>
              <p>{currentMainContent && currentMainContent.body}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </OutterWrapper>
    );
  }
}

export default FaqsContents;

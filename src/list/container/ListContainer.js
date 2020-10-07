import React, { Component } from "react";
import ListHeaderContainer from "./ListHeaderContainer";
import ListTagContainer from "./ListTagContainer";
import ListViewContainer from "./ListViewContainer";
import { Grid, Container } from "semantic-ui-react";
import "../view/scss/ListMain.scss";
import "../view/scss/ListTag.scss";

class ListContainer extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={2}>
            <ListTagContainer />
          </Grid.Column>

          <Grid.Column width={14}>
            <ListHeaderContainer />
            <ListViewContainer />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ListContainer;

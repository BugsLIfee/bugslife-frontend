import React, { Component } from "react";
import MemberList from "../view/MemberList";
import MemberDetail from "../view/MemberDetail";
import { Grid } from "semantic-ui-react";
class MemberMngContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={6}>
            <MemberList />
          </Grid.Column>
          <Grid.Column width={6}>
            <MemberDetail />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MemberMngContainer;

import React, { Component } from "react";
import AdminSideMenu from "../view/AdminSideMenu";
import AdminResultContainer from "./AdminResultContainer";
import { Grid } from "semantic-ui-react";

class AdminContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={5}>
            <AdminSideMenu />
          </Grid.Column>
          <Grid.Column width={11}>
            <AdminResultContainer />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import AdminRoutes from "../../routes/AdminRoutes";
import AdminSideMenu from "../view/AdminSideMenu";

@inject("Store")
@observer
class AdminContainer extends Component {
  render() {
    const match = this.props.match;
    return (
      <div class="admincontainer">
        <div className="admin-header">
          <span role="img" aria-label="aria">
            👀 관리자 페이지
          </span>
        </div>
        <Grid>
          <Grid.Row>
          <Grid.Column width={3} >
            <AdminSideMenu/>
          </Grid.Column>
          <Grid.Column width={12}>
            <AdminRoutes match={match}/>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;

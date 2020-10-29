import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import AdminSideMenu from "../view/AdminSideMenu";
import AdminRoutes from "../../routes/AdminRoutes";


@inject("Store")
@observer
class AdminContainer extends Component {
  render() {
    const match = this.props.match;
    return (
      <div class="admincontainer">
        <Grid>
          <Grid.Column width={4} class="side" style={{border: 'solid 1px gray'}}>
            <AdminSideMenu  />
          </Grid.Column>
          <Grid.Column width={12}>
            <AdminRoutes match={match}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;

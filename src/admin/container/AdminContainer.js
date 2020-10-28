import React, { Component } from "react";
import AdminSideMenu from "../view/AdminSideMenu";
//import AdminRoutes from "../../routes/AdminRoutes";
import AdminResultContainer from "./AdminResultContainer";
import { Grid, Container } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class AdminContainer extends Component {
  render() {
    const menu = this.props.match.params.menu;
    this.props.Store.admin.setMenu(menu);

    console.log("admincontainer-menu:", menu);
    return (
      <div class="admincontainer">
        <Grid>
          <Grid.Column width={4} class="side">
            <AdminSideMenu menu={menu} />
          </Grid.Column>
          <Grid.Column width={12}>
            <AdminResultContainer menu={menu} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;

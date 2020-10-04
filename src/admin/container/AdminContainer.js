import React, { Component } from "react";
import AdminSideMenu from "../view/AdminSideMenu";
import AdminResultContainer from "./AdminResultContainer";
import { Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class AdminContainer extends Component {
  render() {
    const menu = this.props.match.params.menu;
    this.props.Store.admin.setMenu(menu);

    console.log("admincontainer-menu:",menu);
    return (
      <div>
        <Grid>
          <Grid.Column width={5}>
            <AdminSideMenu menu={menu} />
          </Grid.Column>
          <Grid.Column width={11}>
            <AdminResultContainer menu={menu} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;

import React, { Component } from 'react';
import ContactSideMenu from "../view/ContactSideMenu";
import ContactResultContainer from "./ContactResultContainer";
import { Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ContactContainer extends Component {
  render() {
    const menu = this.props.match.params.menu;
    this.props.Store.contact.setMenu(menu);
    return (
      <Grid>
        <Grid.Column width={5}>
          <ContactSideMenu menu={menu} />
        </Grid.Column>
        <Grid.Column width={11} >
          <ContactResultContainer menu={menu} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default ContactContainer;
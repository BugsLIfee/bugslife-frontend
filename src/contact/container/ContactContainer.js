import React, { Component } from 'react';
import ContactSideMenu from "../view/ContactSideMenu";
import { Button, Grid, Icon, Input } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import ContactRoutes from "../../routes/ContactRoutes";
import "../view/scss/contactPage.scss";
import { Link } from 'react-router-dom';
@inject("Store")
@observer
class ContactContainer extends Component {
  render() {
    //const menu = this.props.match.params.menu;
    const match = this.props.match;
    //this.props.Store.contact.setMenu(menu);
    return (
      <div class="contactcontainer">
        <div className="contact-header">
            <span style={{maringTop:"10px"}}>
               고객센터
            </span>
          <Input color="violet" style={{marginLeft:"230px"}}size='mini' icon='search' placeholder='자주묻는질문...' />
          <Button size="big" as={Link} to="/contact/chat"  color="violet"style={{marginLeft:"200px"}}>
          <Icon name='chat' />
              1:1 채팅 문의하기 
          </Button>
        </div>
        <div className="contact-main">
          <Grid>
            <Grid.Column width={3}>
              <ContactSideMenu />
            </Grid.Column>
           <Grid.Column width={13} style={{margin:"0 20px 30px 0"}}>
            <ContactRoutes match={match}/>
          </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ContactContainer;

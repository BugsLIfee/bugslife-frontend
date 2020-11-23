import React, { Component } from 'react';
import ContactSideMenu from "../view/ContactSideMenu";
import { inject, observer } from "mobx-react";
import ContactRoutes from "../../routes/ContactRoutes";
import "../view/scss/contactPage.scss";

@inject("Store")
@observer
class ContactContainer extends Component {
  render() {
    //const menu = this.props.match.params.menu;
    const match = this.props.match;
    //this.props.Store.contact.setMenu(menu);

    //     if(!this.props.Store.oauth.isAdmin) {
    //   swal("접근 거부 !","관리자만 접근 허용된 페이지입니다.", "warning");
    //   return <Redirect
    //       to={{
    //       pathname: "/login",
    //       state: { from: this.props.location }
    //   }}/>;   
    // }
      return (
       
        <div class="admincontainer">
          <div className="contact-header">
            
              <h2 className="contact-header-title">
              <span role="img" aria-label="aria">🧑🏻‍💻 고객센터</span>
              </h2>
       
          </div>
         
          <div className="admin-main">
            <div className="admin-main-side">
              <ContactSideMenu />
            </div>
            <div className="admin-main-page">
              <ContactRoutes match={match}/>
            </div>
          </div>
  
        </div>
      )
  }
}

export default ContactContainer;

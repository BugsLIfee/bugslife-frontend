import React, { Component } from 'react';
import QnAMy from '../view/QnAMy';
import QnAWrite from '../view/QnAWrite';
import InfoMngContainer from './InfoMngContainer';
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ContactResultContainer extends Component {
  render() {
    const menu = this.props.menu;

    console.log("contact-result:", menu);
    return (
      <div>
        {menu === "qna-write" ? <QnAWrite /> : ""}
        {menu === "qna-my" ? <QnAMy /> : ""}
        {menu === "info" ? <InfoMngContainer /> : ""}
      </div>
    );
  }
}

export default ContactResultContainer;
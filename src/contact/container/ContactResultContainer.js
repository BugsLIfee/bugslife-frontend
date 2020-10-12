import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import QuestionEditContainer from './QuestionEditContainer';
import InfoListContainer from '../../admin/container/InfoListContainer';
import QuestionMyListContainer from './QuestionMyListContainer';

@inject("Store")
@observer
class ContactResultContainer extends Component {
  render() {
    const menu = this.props.menu;

    console.log("contact-result:", menu);
    return (
      <div>
        {menu === "qna-write" ? <QuestionEditContainer /> : ""}
        {menu === "qna-myList" ? <QuestionMyListContainer /> : ""}
        {menu === "info-list" ? <InfoListContainer /> : ""}
      </div>
    );
  }
}

export default ContactResultContainer;
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import QuestionEditContainer from './QuestionEditContainer';
import InfoListContainer from '../../admin/container/info/InfoListContainer';
import QuestionMyListContainer from './QuestionMyListContainer';

@inject("Store")
@observer
class ContactResultContainer extends Component {
  render() {
    const menu = this.props.menu;
    return (
      <div>
        {menu === "qna-q-write" ? <QuestionEditContainer /> : ""}
        {menu === "qna-myList" ? <QuestionMyListContainer /> : ""}
        {menu === "info-list" ? <InfoListContainer /> : ""}
      </div>
    );
  }
}

export default ContactResultContainer;
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MemberMngContainer from "./MemberMngContainer";
import BoardMngContainer from "./BoardMngContainer";
import QnaMngContainer from "./QnaMngContainer";
import InfoMngContainer from "./InfoMngContainer";

class AdminResultContainer extends Component {
  render() {
    const menu = this.props.menu;
    return (
      <div>
        {menu === "" ? <MemberMngContainer /> : ""}
        {menu === "member" ? <MemberMngContainer /> : <MemberMngContainer />}
        {menu === "board" ? <BoardMngContainer /> : ""}
        {menu === "qna" ? <QnaMngContainer /> : ""}
        {menu === "info" ? <InfoMngContainer /> : ""}
      </div>
    );
  }
}

export default AdminResultContainer;

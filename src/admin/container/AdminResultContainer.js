import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MemberMngContainer from "./MemberMngContainer";
import BoardMngContainer from "./BoardMngContainer";
import QnaMngContainer from "../../admin/container/QnaMngContainer";
import InfoMngContainer from "../../admin/container/InfoMngContainer";

class AdminResultContainer extends Component {
  render() {

    const menu = this.props.menu;
    console.log("resultcontainer--",menu);
    return (
      <div>
        {menu === "member" || "" ? <MemberMngContainer /> :"" }
        {menu === "board" ? <BoardMngContainer /> : ""}
        {menu === "qna" ? <QnaMngContainer /> : ""}
        {menu === "info" ? <InfoMngContainer /> : ""}
      </div>
    );
  }
}

export default AdminResultContainer;

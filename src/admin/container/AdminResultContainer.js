import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MemberMngContainer from "./MemberMngContainer";
import BoardMngContainer from "./BoardMngContainer";
import QnaMngContainer from "../../admin/container/QnaMngContainer";
import InfoListContainer from "./InfoListContainer";
import InfoDetailContainer from "./InfoDetailContainer";
import InfoEditContainer from "./InfoEditContainer";


class AdminResultContainer extends Component {
  render() {
    const menu = this.props.menu;
    console.log("resultcontainer--", menu);
    return (
      <div>
        {menu === "member" || "" ? <MemberMngContainer /> : ""}
        {menu === "board" ? <BoardMngContainer /> : ""}
        {menu === "qna" ? <QnaMngContainer /> : ""}
        {menu === "info-list" ? <InfoListContainer /> : ""}
        {menu === "info-add" ? <InfoEditContainer/> : ""}
        {menu === "info-detail" ? <InfoDetailContainer/> : ""}
      </div>
    );
  }
}

export default AdminResultContainer;

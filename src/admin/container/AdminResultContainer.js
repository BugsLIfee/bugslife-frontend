import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MemberMngContainer from "./MemberMngContainer";
import BoardMngContainer from "./BoardMngContainer";
import QnaMngContainer from "../../admin/container/QnaMngContainer";
import InfoListContainer from "./InfoListContainer";
import InfoDetailContainer from "./InfoDetailContainer";
import InfoEditContainer from "./InfoEditContainer";
import qs from "qs";
import { withRouter } from "react-router-dom";

@withRouter
class AdminResultContainer extends Component {
  render() {
    const menu = this.props.menu;
      const searchObj = qs.parse(this.props.location.search, {
        ignoreQueryPrefix: true,
      });
   

    console.log("resultcontainer--", menu);
    return (
      <div>
        {menu === "member" || "" ? <MemberMngContainer /> : ""}
        {menu === "board" ? <BoardMngContainer /> : ""}
        {menu === "qna" ? <QnaMngContainer /> : ""}
        {menu === "info-list" ? <InfoListContainer /> : ""}
        {menu === "info-add" ? <InfoEditContainer/> : ""}
        {menu === "info-detail" ? <InfoDetailContainer searchObj={searchObj}/> : ""}
      </div>
    );
  }
}

export default AdminResultContainer;

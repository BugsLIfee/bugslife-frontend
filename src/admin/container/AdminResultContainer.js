import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MemberMngContainer from "./MemberMngContainer";
import BoardMngContainer from "./BoardMngContainer";
import QuestionAllListContainer from "../../contact/container/QuestionAllListContainer";
import InfoListContainer from "./InfoListContainer";
import InfoDetailContainer from "./InfoDetailContainer";
import InfoEditContainer from "./InfoEditContainer";
import ReportBoardContainer from "./report/ReportBoardContainer"
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
        {menu === "qna-all" ? <QuestionAllListContainer /> : ""}
        {menu === "info-list" ? <InfoListContainer /> : ""}
        {menu === "info-write" ? <InfoEditContainer/> : ""}
        {menu === "info-detail" ? <InfoDetailContainer searchObj={searchObj}/> : ""}
        {menu === "report" ? <ReportBoardContainer searchObj={searchObj}/> : ""}
      </div>
    );
  }
}

export default AdminResultContainer;

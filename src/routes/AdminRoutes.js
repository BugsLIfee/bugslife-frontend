import React from "react";
import {Router, Route, Switch } from "react-router-dom";

import qs from "qs";
import MemberMngContainer from "../admin/container/MemberMngContainer";
import BoardMngContainer from "../admin/container/BoardMngContainer";
import QuestionAllListContainer from "../contact/container/QuestionAllListContainer";
import InfoListContainer from "../admin/container/InfoListContainer";
import InfoDetailContainer from "../admin/container/InfoDetailContainer";
import InfoEditContainer from "../admin/container/InfoEditContainer";
import ReportBoardContainer from "../admin/container/report/RportBoardContainer";

const AdminRoutes = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.url}/member`} component={MemberMngContainer} />
      <Route exact path={`${match.url}/board`} component={BoardMngContainer} />
      <Route exact path={`${match.url}/qna-all`} component={QuestionAllListContainer} />
      <Route exact path={`${match.url}/info-list`} component={InfoListContainer} />
      <Route exact path={`${match.url}/info-write`} component={InfoDetailContainer} />
      <Route exact path={`${match.url}/info-detail`} component={InfoEditContainer} />
      <Route exact path={`${match.url}/report`} component={ReportBoardContainer} />
    </>
  );
};
export default AdminRoutes;
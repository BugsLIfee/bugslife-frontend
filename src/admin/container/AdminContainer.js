import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import AdminRoutes from "../../routes/AdminRoutes";
import "../view/scss/adminPage.scss";
import {navStyle} from "../view/scss/adminPage.scss";
import { Divider } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

@inject("Store")
@observer
class AdminContainer extends Component {
  render() {
    const match = this.props.match;
    return (
      <div class="admincontainer">
        <div className="admin-header">👀 관리자 페이지</div>
        <Grid>
          <Grid.Row>
          <Grid.Column width={3} >
            <div className="adminside">

                <a href="/admin/member">
              <div className="list">
                  회원관리
              </div>
                </a>
                <a href="/admin/report">
              <div className="list">
                  신고게시판
              </div>
                </a>
                <a href="/admin/info">
              <div className="list">
                  공지사항관리
              </div>
                </a>
                <a href="/admin/inquiry">
              <div className="list">
                  1:1문의 관리
              </div>
                </a>
            </div>
          </Grid.Column>
          <Divider/>
          <Grid.Column width={12}>
            <AdminRoutes match={match}/>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AdminContainer;

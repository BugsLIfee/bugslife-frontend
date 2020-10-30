import React, { Component } from "react";
import { Container,Menu ,Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./scss/adminPage.scss";

class AdminSideMenu extends Component {
  render() {
    return (
    <div className="adminside">
        <a href="/admin/member">
          <div className="list">
              회원관리
          </div>
        </a>
        <a href="/admin/report">
          <div className="list">
              신고관리
          </div>
        </a>
        <a href="/admin/info">
          <div className="list info">
              공지사항관리
          </div>
        </a>

          <div className="list inquiry">
              1:1문의 관리
          </div>
    </div>
    );
  }
}

export default AdminSideMenu;



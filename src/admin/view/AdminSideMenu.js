import React, { Component } from "react";
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
        <a href="/admin/info-list">
          <div className="list info">
              공지사항관리
          </div>
        </a>
        {/* <a href="/admin/inquiry">
          <div className="list inquiry">
              1:1문의 관리
          </div>
        </a> */}
    </div>
    );
  }
}

export default AdminSideMenu;



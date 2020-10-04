import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./scss/nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <a href="/">
            {" "}
            <h4>HOME</h4>
          </a>{" "}
        </div>
        <div>
          <a href="/login">
            {" "}
            <h4>로그인</h4>
          </a>
        </div>
        <div>
          <a href="/signUp">
            {" "}
            <h4>회원가입</h4>
          </a>
        </div>
        <div>
          <a href="/list">
            {" "}
            <h4>질문글</h4>
          </a>
        </div>

        <div>
          {" "}
          <a href="/myPage">
            <h4>마이페이지</h4>
          </a>
        </div>

        <div>
          <a href="/admin/:menu">
            {" "}
            <h4>ADMIN</h4>
          </a>
        </div>

        <div>
          <a href="/admin/:menu">
            {" "}
            <h4>CONTACT</h4>
          </a>
        </div>
      </nav>
    );
  }
}

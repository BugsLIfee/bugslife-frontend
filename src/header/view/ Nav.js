import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./scss/nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        {/* <div>
          <a href="/">
            {" "}
            <h4>홈</h4>
          </a>{" "}
        </div> */}
        <div>
          <a href="/login">
            {" "}
            <h4>로그인</h4>
          </a>
        </div>
        <div>
          <a href="/signUp">
            {" "}
            <h4>교육과정리뷰</h4>
          </a>
        </div>
        <div>
          <a href="/list">
            {" "}
            <h4>질문글</h4>
          </a>
        </div>

        <div>
          <a href="/freeboard">
            {" "}
            <h4>자유게시판</h4>
          </a>
        </div>

        <div>
          {" "}
          <a href="/myPage">
            <h4>마이페이지</h4>
          </a>
        </div>

        <div>
          <a href="/admin/member">
            {" "}
            <h4>관리자</h4>
          </a>
        </div>

        <div>
          <a href="/contact/my">
            {" "}
            <h4>문의하기</h4>
          </a>
        </div>
      </nav>
    );
  }
}

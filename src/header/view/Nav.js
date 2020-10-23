import React, { Component } from "react";
import "./scss/nav.scss";
import {observer,inject} from "mobx-react";
import { NavLink } from "react-router-dom";

@inject("Store")
@observer
class Nav extends Component {
  componentDidMount() {
    this.props.Store.oauth.loadCurrentlyLoggedInUser();
  }
  render() {
    const oauth = this.props.Store.oauth;
    return (
      <nav>
        <div>
          <a href="/">
            {" "}
            <h4>홈</h4>
          </a>{" "}
        </div>
        
        { oauth.isLogin ? (
          <>
            <div>
                <a href="/profile">내정보보기</a>
            </div>
            <div>
                <span onClick={()=>oauth.onLogout()}>로그아웃</span>
            </div>
          </>
        ): (
            <>
              <div>
                  <a href="/login">로그인</a>        
              </div>
              <div>
                  <a href="/signup">가입하기</a>        
              </div>
            </>
        )}

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
export default  Nav;
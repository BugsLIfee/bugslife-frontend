import React, { Component } from "react";
import "./scss/nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div>HOME</div>
        <div>로그인</div>
        <div>Menu Sample</div>
        <div>Menu Sample2</div>
        <div>마이페이지</div>
      </nav>
    );
  }
}

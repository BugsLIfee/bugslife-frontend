import React, { Component } from "react";
import "./scss/mainSignup.scss";

export default class Mainsignupview extends Component {
  render() {
    return (
      <div className="MainSignup_container">
        <h1>이 모든 혜택 버튼 한 번으로 누리기</h1>
        <br></br>

        <a href="/signup" className="Main_signup">
          <h3>회원가입 하기</h3>
        </a>
      </div>
    );
  }
}

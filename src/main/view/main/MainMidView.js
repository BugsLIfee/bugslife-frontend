import React, { Component } from "react";
import Backgroundmid from "../background/BackgroundMid";
import "./scss/mainMid.scss";

export default class Mainmidview extends Component {
  render() {
    return (
      <div className="Mainmid_wrap ">
        <Backgroundmid />
        <div className="MainmidView_container">
          <h1 className="MainmidView_container_title">
            포인트에 따라 다른 혜택
          </h1>
          <div className="Mainmid_plan">
            <div className="Mainmid_plan_column plan_basic">
              <div className="plan_title plan_basic_title">
                <img
                  src="../logo/logo_green_blank.png"
                  style={{ width: "43px" }}
                />
                <h1> 일반 질문</h1>
              </div>

              <div className="plan_basic_contents">
                <h3>
                  간단한 문제는 부담없이 <b>바로 질문!</b>
                </h3>
                <h3>
                  문제 해결 시, 질문에 걸린 <b>포인트 획득</b>{" "}
                </h3>
              </div>
            </div>

            <div className="Mainmid_plan_column plan_premium">
              <div className="plan_title plan_premium_title">
                <img src="../logo/logo_st.png" style={{ width: "45px" }} />
                <h1> 프리미엄 질문 </h1>
              </div>

              <div className="plan_premium_contents">
                <h3>
                  <b>제한 시간 설정</b>으로 더 빠른 도움받기!
                </h3>
                <h3>
                  <b>실시간 채팅</b>으로 더 정확한 디버깅
                </h3>
                <h3>
                  <b>포인트가 최대 1000배!</b> 쏠쏠한 용돈벌이
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

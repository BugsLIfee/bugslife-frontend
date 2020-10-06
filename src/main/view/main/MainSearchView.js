import React, { Component } from "react";
import BackgroundSearch from "../background/Background_Search";
import "./scss/mainSearch.scss";

export default class Mainsearchview extends Component {
  render() {
    return (
      <div className="MainSearch_wrap">
        <BackgroundSearch />
        <div className="MainSearch_container">
          <img
            className="MainSearch_img"
            src="../main/main_imgs/main_laptop.png"
          />
          <div className="MainSearch_content">
            <h1 className="MainSearch_title">
              언어별 & 기술별 에러, 바로 질문하세요.
            </h1>
            <div className="MainSearch_txt">
              <h3>
                {" "}
                혼자는 도저히 안풀리고 사수한테 물어보기는 애매한 버그,
                <br></br>
                구글링으로도 도대체 안풀리는 내 에러!<br></br>
                <b>벅스 라이프</b>에 질문하세요! <br></br>
                <b>포인트</b>를 걸고 빠르게 에러를 해결할 수도,
                <br></br>
                다른 사람의 에러를 해결하고 포인트를 벌수도 있습니다.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

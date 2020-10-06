import React, { Component } from "react";
import Search from "./SearchView";
import "./scss/mainTop.scss";
import BackgroundView from "./BackgroundView";

export default class MaintopView extends Component {
  render() {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = "도저히 안 풀리는 버그, 여기서 다 해결"; // 타이핑될 텍스트를 가져온다
    let show;

    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
      var tyInt = setInterval(typing, 100); // 반복동작
    }

    function typing() {
      if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        let data = typingTxt.map((val) => {
          console.log(val, typingIdx);
          React.createElement("h1", val);
          typingIdx++;
        });
        show = React.createElement("div", { className: "typing-txt" }, data);
      } else {
        clearInterval(tyInt); //끝나면 반복종료
      }
    }

    return (
      <div className="wrap">
        <BackgroundView />
        <div className="MainTopView_container">
          <h1 className="typing-txt">도저히 안 풀리는 버그, 여기서 다 해결</h1>
          {/* <h1>{this.show}</h1> */}
          {/* <h1 className="typing"></h1> */}
          <Search />
        </div>
      </div>
    );
  }
}

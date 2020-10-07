import React, { Component } from "react";
import Search from "./SearchView";
import "./scss/mainTop.scss";
import BackgroundView from "../background/BackgroundView";

export default class MaintopView extends Component {
  render() {
    return (
      <div className="MainTop_wrap">
        <BackgroundView />
        <div className="MainTopView_container">
          <h1 className="typing-txt">도저히 안 풀리는 버그, 여기서 다 해결</h1>

          <Search />
        </div>
      </div>
    );
  }
}

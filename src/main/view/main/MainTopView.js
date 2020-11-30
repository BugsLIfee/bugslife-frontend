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
          <h1 className="typing-txt">주니어 개발자, <br /> 벅스라이프로 다 모여라</h1>

        {/* <div className="MainTop_searchbar">        <Search /></div> */}
  
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import MaintopView from "../view/main/MainTopView";
import MainmidView from "../view/main/MainMidView";
import Mainsearchview from "../view/main/MainSearchView";
import Mainsignupview from "../view/main/MainSignupView";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <MaintopView />
        <Mainsearchview />
        <MainmidView />
        <Mainsignupview />
      </div>
    );
  }
}

export default MainContainer;

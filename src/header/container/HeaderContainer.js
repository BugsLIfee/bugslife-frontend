import React, { Component } from "react";
import Header from "../view/Header";

class HeaderContainer extends Component {
  render() {
    return <Header authenticated={this.props.authenticated} onLogout={this.props.onLogout}/>;
  }
}

export default HeaderContainer;

import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { inject } from "mobx-react";

const headerLogo = {
  width: "200px",
  height: "70px",
  marginLeft: "-8px",
};

const headerMain = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "80px",
  border: "1px solid black",
};
class Header extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%" }}>
          <div className="headerMain" style={headerMain}>
            <Image src="../logo/logobug.png" style={headerLogo} href="/" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

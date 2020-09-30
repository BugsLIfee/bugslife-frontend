import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { inject } from "mobx-react";
import Nav from "./ Nav";
import "./scss/header.scss";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="headerMain">
            <img
              className="logo"
              src="../logo/logo_st.png"
              href="/"
              width="50px"
            />
            <h1>BUGS LIFE</h1>
          </div>
          <div className="nav">
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

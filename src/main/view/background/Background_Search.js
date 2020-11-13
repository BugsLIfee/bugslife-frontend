import React, { Component } from "react";
import "./scss/back_search.scss";

export default class BackgroundSearch extends Component {
  render() {
    return (
      <div className="Background_search_container">
        <img
          className="back_search_blue_tri back_search"
          src="../main/blue_tri.png"
          alt="background_img"
        ></img>
        <img
          className="back_search_red_long rotate"
          src="../main/red_long.png"
          alt="background_img"
        ></img>
        <div className="back_search_blue_circle back_search"></div>
      </div>
    );
  }
}

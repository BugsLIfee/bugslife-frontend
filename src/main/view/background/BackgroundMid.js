import React, { Component } from "react";
import "./scss/back_mid.scss";

export default class Backgroundmid extends Component {
  render() {
    return (
      <div className="Background_mid_container">
        <div className="back_mid_navy_circle "></div>
        <img
          className="back_mid_black_long back_mid "
          src="../main/black_longsqaure.png"
          alt="main_background_img"
        ></img>
        <img
          className="back_mid_yellow_cloud back_mid"
          src="../main/sqaure.png"
          alt="main_background_img"
        ></img>
        <img
          className="back_mid_red_semi back_mid"
          src="../main/red_semi.png"
          alt="main_background_img"
        ></img>

        <h1 className="back und">undifined</h1>
        <h1 className="count_ back_mid">count+=</h1>
      </div>
    );
  }
}

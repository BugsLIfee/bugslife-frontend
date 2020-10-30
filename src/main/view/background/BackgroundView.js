import React, { Component } from "react";
import "./scss/back.scss";

export default class BackgroundView extends Component {
  render() {
    return (
      <div className="MainTopView_background_containter">
        <img className="back red_circle" src="../main/red_circle.png" />
        <img
          className="back rotate black_long"
          src="../main/black_longsqaure.png"/>
        <h1 className="back error">error</h1>
        <h1 className="back und">undifined</h1>
        <div name="infinity" className="back rotate" />
        <img className="back blue_tri" src="../main/blue_tri.png" />
        <img className="back green_arch" src="../main/green_arch.png"/> 
        <img className="back pink_sqaure" src="../main/pink_sqaure.png" />
        <img className="back red_semi" src="../main/red_semi.png" />
        <img className="back rotate sqaure" src="../main/sqaure.png" />
        <img className="back blue_tra" src="../main/blue_tra.png" /> 
        {/* <img className="back yellow_cloud" src="../main/yellow_cloud.png"></img> */}
      </div>
    );
  }
}

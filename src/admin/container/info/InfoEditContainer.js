import React, { Component } from "react";
import InfoEdit from "../../view/InfoEdit";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class InfoEditContainer extends Component {
  info= this.props.Store;

  onSetInfoProp = (name, value) => {
    this.info.setInfoProp(name, value);
  };

  onAddInfo = (infoObj) => {

    console.log("addInfo함수 호출", infoObj);
    this.info.onAddInfo(infoObj);
    alert("성공");
  };

  onRemoveInfo = () => {
    let infoData = this.info.getInfo;
    console.log("remvoe----", infoData.id);
    this.info.removeInfo(infoData.id);
  };

  onModifyInfo = () => {
    let infoData = this.info.getInfo;
    this.info.modifyInfo(infoData);
  };
  render() {
   const oauth = this.props.Store.oauth;
   console.log(oauth.getCurrentUserInfo);
    return (
      <div>
        <InfoEdit
          info={this.info.getInfo}
          currentUser={oauth.getCurrentUserInfo}
          onSetInfoProp={this.onSetInfoProp}
          onAddInfo={this.onAddInfo}
          onRemoveInfo={this.onRemoveInfo}
          onModifyInfo={this.onModifyInfo}
        />
      </div>
    );
  }
}
export default InfoEditContainer;

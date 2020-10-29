import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import InfoEdit from "../../view/InfoEdit";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class InfoEditContainer extends Component {
  info = this.props.Store.info;

  onSetInfoProp = (name, value) => {
    this.info.setInfoProp(name, value);
  };

  onAddInfo = (infoObj) => {
    //TodoStore의 addTodo(todo) 호출
    
    let infoData = this.info.getInfo;
    
    console.log("addInfo함수 호출", infoObj);
    infoData = { ...infoData };
    this.info.onAddInfo(infoObj);
    alert("성공");
    //document.location.href="/info-list";
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
   
    return (
      <div>
        <InfoEdit
          info={this.info.getInfo}
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

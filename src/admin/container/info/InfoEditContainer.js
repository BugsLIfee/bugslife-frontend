import React, { Component } from "react";
import InfoEdit from "../../view/InfoEdit";
import { observer, inject } from "mobx-react";
import swal from "sweetalert";
import adminCategory from "../../data/category";
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
    swal("작성완료!","공지사항이 등록되었습니다!","success");
  };
  
  onRemoveInfo = () => {
    let infoData = this.info.getInfo;
    console.log("remvoe----", infoData.id);
    this.info.removeInfo(infoData.id);
    swal("삭제완료!","공지사항이 삭제되었습니다!","success");
  };

  onModifyInfo = () => {
    let infoData = this.info.getInfo;
    this.info.modifyInfo(infoData);
  };
  render() {
   const oauth = this.props.Store.oauth;
   const adminInfo = {...oauth.getCurrentUserInfo};
   const infoCategory = adminCategory.filter((obj)=>(obj.type==='info'))
   console.log("infoCategory",infoCategory);
   console.log("infoeditcontainer:userinfo",adminInfo);
    return (
      <div>
        <InfoEdit
          info={this.info.getInfo}
          currentUser={adminInfo}
          onSetInfoProp={this.onSetInfoProp}
          onAddInfo={this.onAddInfo}
          onRemoveInfo={this.onRemoveInfo}
          onModifyInfo={this.onModifyInfo}
          infoCategory={infoCategory}
        />
      </div>
    );
  }
}
export default InfoEditContainer;

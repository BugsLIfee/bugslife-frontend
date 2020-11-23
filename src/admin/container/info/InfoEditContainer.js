import React, { Component } from "react";
import InfoEdit from "../../view/InfoEdit";
import { observer, inject } from "mobx-react";
import swal from "sweetalert";
import qs from "qs";
import adminCategory from "../../data/category";

@inject("Store")
@observer
class InfoEditContainer extends Component {
  info= this.props.Store;

  onSetInfoProp = (name, value) => {
    this.info.setInfoProp(name, value);
  };


  onAddInfo = (infoObj) => {

    const oauth = this.props.Store.oauth;
    const adminInfo = {...oauth.getCurrentUserInfo};
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`


    if(infoObj["user"] === undefined) {
      infoObj["user"] = adminInfo.id
      infoObj["username"] = adminInfo.name
    } 
    if(infoObj["registDate"] ===undefined || infoObj["registDate"] === ""){
      infoObj["registDate"] = date
    }
    if(infoObj["editDate"] === undefined || infoObj["editDate"] ==="" ){
      infoObj["editDate"] = date
    } 
    console.log("addInfo함수 호출", infoObj);
    this.props.Store.info.onAddInfo(infoObj);
    swal("작성완료!","공지사항이 등록되었습니다!","success");

    this.props.history.push({
      pathname: `/admin/info-list`
    });
  
  window.location.reload();
  };
  


  onModifyInfo = (infoObj) => {

    let info = this.props.Store.info.info;
    const oauth = this.props.Store.oauth;
    const adminInfo = {...oauth.getCurrentUserInfo};
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`


    if(infoObj["user"] === undefined) {
      infoObj["id"] = info.id
      infoObj["user"] = adminInfo.id
      infoObj["username"] = adminInfo.name
    } 
    if(infoObj["registDate"] ===undefined || infoObj["registDate"] === ""){
      infoObj["registDate"] = info.registDate;
    }
    if(infoObj["editDate"] === undefined || infoObj["editDate"] ==="" ){
      infoObj["editDate"] = date
    }
    if(infoObj["title"]===undefined || infoObj["title"]===''){
      infoObj["title"] = info.title
    }
    if(infoObj["content"]===undefined || infoObj["content"]===''){
      infoObj["content"] = info.content
    }
    
    console.log(infoObj)
    // let infoData = this.info.getInfo;
     this.props.Store.info.modifyInfo(infoObj);

     this.props.Store.info.onAddInfo(infoObj);
    swal("수정완료!","공지사항이 변경되었습니다!","success");

    this.props.history.push({
      pathname: `/admin/info-list`
  });
  
  window.location.reload();
  };

  componentDidMount=()=>{

    console.log(this.props.match.url)
    const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    if(searchObj.id!==undefined){
      this.props.Store.info.selectInfo(searchObj.id)
    }
 
  }

  render() {
   const oauth = this.props.Store.oauth;
   const adminInfo = {...oauth.getCurrentUserInfo};
   let url = this.props.match.url;
   let cateByUrl = url ==="/contact/qna-write" ? "QNA" : 'INFO';
   const infoCategory = adminCategory.filter((obj)=>(obj.opt=== cateByUrl))
   

   console.log("INFO CATEGORY OPTION : ", infoCategory)


   console.log("INfo container : ", this.props.Store.info.info);
  
    return (
      <div>
        <InfoEdit
          selectUrl ={url}
          info={this.props.Store.info.info}
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

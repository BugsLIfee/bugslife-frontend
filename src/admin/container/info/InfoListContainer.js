import React, { Component } from "react";
import InfoList from "../../view/InfoList";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class InfoListContainer extends Component {

  componentDidMount=()=>{
    this.props.Store.info.selectAllinfo(this.props.Store.oauth.getCurrentUserInfo);
    let test= this.props.Store.oauth.getCurrentUserInfo
    console.log("TEST : ", test)
    
  }

  render() {
    
    const infoStore = this.props.Store.info;
    const user = this.props.Store.oauth.getCurrentUserInfo;
    // console.log("---Infolistcontainer---", infoStore.getInfos);
    
   
    // const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <InfoList ListData={infoStore.getInfos}  user={user} history={this.props.history} />
      </div>
    );
  }
}

export default InfoListContainer;

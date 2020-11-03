import React, { Component } from "react";
import InfoList from "../../view/InfoList";
import { inject, observer } from "mobx-react";
import infotype from "../../../contact/data/category";

@inject("Store")
@observer
class InfoListContainer extends Component {

  render() {
    
    const infoStore = this.props.Store.info;
    this.props.Store.info.selectAllinfo(this.props.Store.oauth.getCurrentUserInfo);
    console.log("---Infolistcontainer---", infoStore.getInfos);
    
    // const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <InfoList ListData={infoStore.getInfos}  history={this.props.history} />
      </div>
    );
  }
}

export default InfoListContainer;

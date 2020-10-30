import React, { Component } from "react";
import InfoList from "../../view/InfoList";
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class InfoListContainer extends Component {
  constructor(){
    this.props.Store.info.selectAllinfo();

  }
  render() {
    console.log("---Infolistcontainer---");

    const infoStore = this.props.Store.info;
    
    // const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <InfoList ListData={infoStore.getinfos} TypeData={infoStore.getinfoType} />
      </div>
    );
  }
}

export default InfoListContainer;

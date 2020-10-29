import React, { Component } from "react";
import InfoList from "../../view/InfoList";
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class InfoListContainer extends Component {
  render() {
    console.log("---Infolistcontainer---");

    const infoStore = this.props.Store.info;
    //api 연결후 적용
    //infoStore.selectAllinfo();
    //  const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <InfoList ListData={infoStore.getinfos} TypeData={infoStore.getinfoType} />
      </div>
    );
  }
}

export default InfoListContainer;

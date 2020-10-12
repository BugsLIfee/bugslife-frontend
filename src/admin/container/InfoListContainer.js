import React, { Component } from "react";
import InfoList from "../view/InfoList";

import { inject, observer } from "mobx-react";
import info from "../../contact/data/info";
import infotype from "../../contact/data/category";

@inject("Store")
@observer
class InfoListContainer extends Component {
  render() {
    console.log("---Infolistcontainer---");

    const infoStore = this.props.Store.info;
    infoStore.selectAllinfo();
    let info = infoStore.getinfos;
    console.log("selectAllinfo:",info);
    //  const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <InfoList ListData={info} TypeData={infotype} />
      </div>
    );
  }
}

export default InfoListContainer;

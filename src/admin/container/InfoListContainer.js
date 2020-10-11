import React, { Component } from "react";
import InfoList from "../view/InfoList";

import { inject, observer } from "mobx-react";
import info from "../../contact/data/info";
import infotype from "../../contact/data/infoType";

@inject("Store")
@observer
class InfoListContainer extends Component {
  render() {
    console.log("---Infolistcontainer---");

    //  const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <InfoList ListData={info} TypeData={infotype} />
      </div>
    );
  }
}

export default InfoListContainer;

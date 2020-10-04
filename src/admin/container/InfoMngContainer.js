

import React, { Component } from "react";
import QnAList from "../view/QnAList";
import { inject, observer } from "mobx-react";
import info from "../../contact/data/info";
import infotype from "../../contact/data/infoType";

@inject("Store")
@observer
class InfoMngContainer extends Component {
  render() {
    console.log("---listcontainer---");

    //  const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <QnAList ListData={info} TypeData={infotype} />
      </div>
    );
  }
}

export default InfoMngContainer;
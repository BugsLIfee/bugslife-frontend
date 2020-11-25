import React, { Component } from "react";
import InfoList from "../../view/InfoList";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class InfoListContainer extends Component {

  componentDidMount=()=>{
    this.props.Store.info.selectAllinfo(this.props.Store.oauth.getCurrentUserInfo);
  }

  render() {
    
    const infoStore = this.props.Store.info;
    const user = this.props.Store.oauth.getCurrentUserInfo;

    return (
      <div>
        <InfoList ListData={infoStore.getInfos}  user={user} history={this.props.history} />
      </div>
    );
  }
}

export default InfoListContainer;

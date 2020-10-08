import React, { Component } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class InfoDetailContainer extends Component {
  componentDidMount() {
    const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
}
  render() {
const { info } = this.props.Store;
info.selectInfo(this.searchObj.id);
  return <div>{info.getInfo}</div>;
  }
}

export default InfoDetailContainer;

import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class APITest extends Component {
  render() {
    const { detail } = this.props.Store;
    detail.selectQuestion(1);
    console.log(detail._question.title);
    return <div> {detail._question.title} </div>    
  }
}

export default APITest;

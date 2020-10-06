import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Listviews from "../view/ListViews";
import testListData from "../testListData";

class ListContainer extends Component {
  render() {
    // const  list  = this.props.Store.list.getList;

    console.log("container:", testListData);
    return (
      <div>
        <Listviews lists={testListData} />
      </div>
    );
  }
}

export default ListContainer;

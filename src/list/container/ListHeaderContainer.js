import React, { Component } from "react";
import ListHeaderview from "../view/ListHeaderView";

class ListHeaderContainer extends Component {
  render() {
    return (
      <div className="list_header headerBar">
        <ListHeaderview />
      </div>
    );
  }
}

export default ListHeaderContainer;

import React, { Component } from "react"
import ListTagView from "../view/ListTagView"

class ListTagContainer extends Component {
  render() {
    return (
      <div className="listTagContainer tagBox">
        <ListTagView />
      </div>
    )
  }
}

export default ListTagContainer

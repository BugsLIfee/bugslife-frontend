import React, { Component } from "react"
import ListHeaderview from "../view/ListHeaderView"

class ListHeaderContainer extends Component {
  render() {
    const { onSetOrderBy } = this.props
    return (
      <div className="list_header headerBar">
        <ListHeaderview onSetOrderBy={onSetOrderBy} />
      </div>
    )
  }
}

export default ListHeaderContainer

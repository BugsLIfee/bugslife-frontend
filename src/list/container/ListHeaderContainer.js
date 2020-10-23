import React, { Component } from "react"
import ListHeaderview from "../view/ListHeaderView"
import "../view/scss/ListMain.scss"

class ListHeaderContainer extends Component {
  render() {
    const { onSetOrderBy } = this.props
    return (
      <div className="header">
        <span className="qna">

          <h1>Q/A</h1>
        </span>
        <ListHeaderview onSetOrderBy={onSetOrderBy} />
      </div>
    )
  }
}

export default ListHeaderContainer

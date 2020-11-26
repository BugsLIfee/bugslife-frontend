import React, { Component } from "react"
import ListHeaderview from "../view/ListHeaderView"
import "../view/scss/ListMain.scss"


class ListHeaderContainer extends Component {
  render() {
    const { onSetOrderBy, search } = this.props
    return (
      <div className="ListGridHeader">
        <span className="qna">
          <h1>버그 Q&A</h1>
        </span>
        <ListHeaderview onSetOrderBy={onSetOrderBy} search = {search}/>
      </div>
    )
  }
}

export default ListHeaderContainer

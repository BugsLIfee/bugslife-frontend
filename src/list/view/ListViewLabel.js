import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewLabel extends Component {
  render() {

    const { listView } = this.props
    return (
      <div className="list_item_label">
        <div className="inner">
          <span className="count">{listView.numOfAnswers}</span>
          <span className="answer">답변</span>
        </div>
        <div className="view">
          <span>{listView.view} views</span>
          </div>
      </div>
    )
  }
}

export default ListViewLabel

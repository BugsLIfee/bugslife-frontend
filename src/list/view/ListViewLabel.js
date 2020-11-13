import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewLabel extends Component {
  render() {

    const { listView } = this.props
    return (
      <div class="list_item_label">
        <div class="inner">
          <span class="count">{listView.answer}</span>
          <span class="answer">답변</span>
        </div>
        <div class="view">
          <span>{listView.views} views</span>
          </div>
      </div>
    )
  }
}

export default ListViewLabel

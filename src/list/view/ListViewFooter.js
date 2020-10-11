import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewFooter extends Component {
  render() {
    const { listView } = this.props

    return (
      <div class="item-right">
        {/* <div class="item-right"> */}
        <div class="inner">
          <span class="point">{listView.point}P</span>
          <span class="plus">+{listView.addPoints * 30}P</span>
        </div>
      </div>
    )
  }
}

export default ListViewFooter

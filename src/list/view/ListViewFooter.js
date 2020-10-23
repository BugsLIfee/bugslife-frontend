import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewFooter extends Component {
  render() {
    const { listView } = this.props

    return (
      <div class="item-right">
        {/* <div class="item-right"> */}
          <span class="point">
            {listView.point}
            <span class="p">P</span>
            </span>
          <div class="box-like">
            <span class="img">
              <img src="../../detail/empty_bookmark.png"></img>
            </span>
            <span class="number">{listView.addPoints}</span>
          </div>
      </div>
    )
  }
}

export default ListViewFooter

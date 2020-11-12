import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewFooter extends Component {
  render() {
    const { listView } = this.props

    return (
      <div class="item-right">
        {/* <div class="item-right"> */}
      
          <div class="box-like">
            <img src="../../detail/empty_bookmark.png" alt=""></img>
            <span class="number">{listView.addPoints}</span>
            </div>

            <span class="point">
       
            +{listView.point}
            <span class="p">P</span></span>
          
      </div>
    )
  }
}

export default ListViewFooter

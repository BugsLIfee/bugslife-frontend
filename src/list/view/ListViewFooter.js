import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewFooter extends Component {
  render() {
    const { listView } = this.props

    return (
      <div className="item-right">
        {/* <div class="item-right"> */}
      
          <div className="box-like">
            <img src="../../detail/empty_bookmark.png" alt="img"></img>
            <span className="number">{listView.likes}</span>
            </div>

            <span className="point">
       
            +{listView.point}
            <span className="p">P</span></span>
          
      </div>
    )
  }
}

export default ListViewFooter

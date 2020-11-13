import React, { Component } from "react"
import "./scss/ListItem.scss"

class ListViewFooter extends Component {
  render() {
    const { listView } = this.props

    return (
      <div class="item-right">
        {/* <div class="item-right"> */}
      
          <div class="box-like">
<<<<<<< HEAD
            <img src="../../detail/empty_bookmark.png" alt=""></img>
            <span class="number">{listView.likes}</span>
=======
            <img src="../../detail/empty_bookmark.png" alt="img"></img>
            <span class="number">{listView.addPoints}</span>
>>>>>>> d800b2cfb568409d34911695a31ebe6bea343ba8
            </div>

            <span class="point">
       
            +{listView.point}
            <span class="p">P</span></span>
          
      </div>
    )
  }
}

export default ListViewFooter

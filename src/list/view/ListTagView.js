import { set } from "mobx"
import React, { Component } from "react"
import { Badge } from "react-bootstrap"
import "./scss/ListTag.scss"

export default class Listtagview extends Component {
  render() {
    const { tagAll } = this.props
    console.log("view tagALl------------", tagAll.slice())

    const tags = tagAll.map((tag) => {
      return (
        <span className="tagLists" >
          <Badge variant="primary" onClick={()=>{console.log(tag.tagId)}}>{tag.tagName}</Badge>
        </span>
      )
    })

    return (
    <div className="listTag tagItem" >{tags}</div>
      // <div class="list-item table-qna">
      //   <div class="lnb">

      //   </div>
      // </div>
    )
  }
}

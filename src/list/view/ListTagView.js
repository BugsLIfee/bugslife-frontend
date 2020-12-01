import React, { Component } from "react"
import { Badge } from "react-bootstrap"
import "./scss/ListTag.scss"

export default class Listtagview extends Component {
  render() {
    const { tagAll, searchTag } = this.props

    const tags = tagAll.map((tag, index) => {
      return (
        <span className="tagLists" key={index}>
          <Badge variant="primary" onClick={()=>{searchTag(tag)}}>{tag}</Badge>
        </span>
      )
    })

    return (
    <div className="listTag tagItem" >{tags}</div>
    )
  }
}

import React, { Component } from "react"
import { Badge } from "react-bootstrap"
import "./scss/ListTag.scss"

export default class Listtagview extends Component {
  render() {
    return (
      <div className="listTag tagItem">
        <span>
          <Badge variant="info">VisualStudioCode</Badge>
        </span>
        <span>
          <Badge variant="info">JavaScript</Badge>
        </span>
        <span>
          <Badge variant="info">C#</Badge>
        </span>
        <span>
          <Badge variant="info">react</Badge>
        </span>
      </div>
      // <div class="list-item table-qna">
      //   <div class="lnb">

      //   </div>
      // </div>
    )
  }
}

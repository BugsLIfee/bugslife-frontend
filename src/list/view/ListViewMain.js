import React, { Component } from "react"
import { Badge } from "react-bootstrap"
import "./scss/ListItem.scss"

const img = {
  width: "45px",
  height: "45px",
}
class ListViewMain extends Component {
  render() {
    const { listView } = this.props
    const tags = listView.tags.map((tag) => {
      return (
        <span className="tagFont">
          <Badge variant="primary" >{tag}</Badge>{" "}
        </span>
      )
    })
    return (
      <div class="item-center">
        <div class="inner">
          <a href="/detail" class="title">
            {listView.title}
          </a>
          <span class="date">{listView.date}</span>
          <div class="tab-box">
            <div class="tag-box">{tags}</div>

          {/* <div class="box-like">
            <span class="img">
              <img src="../../detail/empty_bookmark.png"></img>
            </span>
            <span class="number">{listView.addPoints}</span>
          </div> */}

            <div class="box-grade">
              <span class="btn-grade img">
                <img style={img} src={listView.userIcon} alt="img"></img>
              </span>
              <span class="value">
                <span class="name">{listView.writer_id}</span>
                <span class="grade">{listView.writer_lv}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListViewMain

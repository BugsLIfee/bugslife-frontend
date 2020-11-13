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
    // const tags = listView.tags.map((tag) => {
    //   return (
        // <span className="tagFont">
        //   <Badge variant="primary" >{tag}</Badge>{" "}
        // </span>
    //   )
    // })
    return (
      <div class="item-center">
        <div class="inner">
          <a href="/detail" class="title">
            {listView.title}
          </a>
          <span class="date">{listView.registDate}</span>
          <div class="tab-box">
            <div class="tag-box">
              <span className="tagFont">
                <Badge variant="primary" >test</Badge>{" "}
              </span>
            </div>
            <div class="box-grade">
              <span class="btn-grade img">
<<<<<<< HEAD
                {/* <img style={img} src={listView.userIcon} alt=""></img> */}
                <img style={img} src="../logo/userIcon.png" alt=""></img>
=======
                <img style={img} src={listView.userIcon} alt="img"></img>
>>>>>>> d800b2cfb568409d34911695a31ebe6bea343ba8
              </span>
              <span class="value">
                <span class="name">{listView.writer}</span>
                {/* <span class="grade">{listView.writer_lv}</span> */}
                <span class="grade">test level</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListViewMain

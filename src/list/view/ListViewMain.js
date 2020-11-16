import React, { Component } from "react"
import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
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
        // <span classNameName="tagFont">
        //   <Badge variant="primary" >{tag}</Badge>{" "}
        // </span>
    //   )
    // })
    return (
      <div className="item-center">
        <div className="inner">
          <Link to={`/detail/${listView.id}`} className="title">
            {listView.title} 
          </Link>
          <span className="date">{listView.registDate}</span>
          <div className="tab-box">
            <div className="tag-box">
              <span classNameName="tagFont">
                <Badge variant="primary" >test</Badge>{" "}
              </span>                                 
            </div>
            <div className="box-grade">
              <span className="btn-grade img">
                {/* <img style={img} src={listView.userIcon} alt=""></img> */}
                <img style={img} src="../logo/userIcon.png" alt=""></img>
              </span>
              <span className="value">
                <span className="name">{listView.writer}</span>
                {/* <span className="grade">{listView.writer_lv}</span> */}
                <span className="grade">test level</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListViewMain

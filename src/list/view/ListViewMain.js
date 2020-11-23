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
    const tags = listView.tags.map((tag) => {
      return (
        <span classNameName="tagFont">
          <Badge variant="primary" >{tag}</Badge>{" "}
        </span>
      )
    })

    console.log(listView)
    const dueDate = Math.floor((new Date(listView.dueDate+"T00:00:00").getTime() - new Date().getTime())
            /(1000*60*60*24)) + 1;
    return (
      <div className="item-center">
        <div className="inner">
          <div className="title">
            <Link to={`/detail/${listView.id}`} className="title">
              {listView.title} 
            </Link>
            { listView.premium ? 
              <h5 className="premium">✨ Premium </h5>
              : <></>}
          </div>
          <span className="date">{listView.registDate.substring(0,10)}</span>
          <span className="date">
            {dueDate < 0 ? <span className="over_due"> 마감됨 </span> : <span className="under_due"> D-{dueDate}</span>}
          </span>
          <div className="tab-box">
            <div className="tag-box">
              <span classNameName="tagFont">
                {tags}
              </span>                                 
            </div>
            <div className="box-grade">
              <span className="btn-grade img">
                {/* <img style={img} src={listView.userIcon} alt=""></img> */}
                <img style={img} src="../logo/userIcon.png" alt=""></img>
              </span>
              <span className="value">
                <span className="name">{listView.writerName}</span>
                {/* <span className="grade">{listView.writer_lv}</span> */}
                <span className="grade">Level {listView.writerLevel } </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListViewMain

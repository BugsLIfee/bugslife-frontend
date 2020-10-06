import React, { Component } from "react";
import { Badge } from "react-bootstrap";

const img = {
  width: "50px",
  height: "50px",
};
class ListViewMain extends Component {
  render() {
    const { listView } = this.props;
    const tags = listView.tags.map((tag) => {
      return (
        <span>
          <Badge variant="info">{tag}</Badge>{" "}
        </span>
      );
    });
    return (
      <div class="item-center">
        <div class="inner">
          <a href="/detail" class="tits">
            {listView.title}
          </a>
          <span class="date">{listView.date}</span>
          <div class="tab-box">
            <ul>
              <li>{tags}</li>
            </ul>
          </div>

          <div class="box-like">
            <span class="btn-like img">
              <img style={img} src="https://via.placeholder.com/30x30"></img>
            </span>
            <span class="thumb">12</span>
          </div>

          <div class="box-grade">
            <span class="btn-grade img">
              <img style={img} src={listView.userIcon}></img>
            </span>
            <span class="value">
              <span class="name">{listView.writer_id}</span>
              <span class="grade">{listView.writer_lv}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListViewMain;

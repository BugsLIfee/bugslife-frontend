import React, { Component } from "react";
import "./scss/ListItem.scss";

class ListViewLabel extends Component {
  render() {
    const img = {
      width: "80px",
      height: "80px",
    };
    const { listView } = this.props;
    return (
      <div class="list_item_label">
        <div class="inner">
          <span class="img">
            <img style={img} src={listView.answerIcon}></img>
          </span>
          <span class="count">답변 {listView.answer}</span>
          <span class="view">{listView.views} views</span>
        </div>
      </div>
    );
  }
}

export default ListViewLabel;

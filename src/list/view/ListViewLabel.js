import React, { Component } from "react";

class ListViewLabel extends Component {
  render() {
    const img = {
      width: "50px",
      height: "50px",
    };
    const { listView } = this.props;
    return (
      <div class="item-left">
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

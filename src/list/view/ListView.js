import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import "./scss/ListItem.scss";

export default class ListView extends Component {
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
      <div class="list-item table-qna">
        <div class="content">
          <div class="item-box">
            {/* item-left (s) */}
            <div class="item-left">
              <div class="inner">
                <span class="img">
                  <img src={listView.answerIcon}></img>
                </span>
                <span class="count">답변 {listView.answer}</span>
                <span class="view">{listView.views} views</span>
              </div>
            </div>
            {/* item-left (e) */}
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
                    <img src="https://via.placeholder.com/30x30"></img>
                  </span>
                  <span class="thumb">12</span>
                </div>

                <div class="box-grade">
                  <span class="btn-grade img">
                    <img src={listView.userIcon}></img>
                  </span>
                  <span class="value">
                    <span class="name">{listView.writer_id}</span>
                    <span class="grade">{listView.writer_lv}</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="item-right">
              <div class="inner">
                <div class="img">
                  <img src="https://via.placeholder.com/30x30"></img>
                </div>
                <span class="point">
                  <span class="default">{listView.point}</span>
                  <span class="plus">{listView.addPoints * 10}</span>
                </span>
                <span class="comment">
                  나도 궁금해요<span class="number">{listView.addPoints}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

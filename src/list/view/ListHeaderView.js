import React, { Component } from "react";
import "./scss/ListHeader.scss";

export default class Listheaderview extends Component {
  render() {
    return (
      <div class="list-item table-qna">
        <div class="content">
          <h2>Q/A</h2>
          <div class="content-menu">
            <ul class="list-tag">
              <li>
                <a href="#javascript;">태그1</a>
              </li>
              <li>
                <a href="#javascript;">태그1</a>
              </li>
              <li>
                <a href="#javascript;">태그1</a>
              </li>
            </ul>

            <ul class="list-rank">
              <li class="active">
                <a href="javscript;">최신순</a>
              </li>
              <li>
                <a href="javscript;">조회수</a>
              </li>
              <li>
                <a href="javscript;">추천수</a>
              </li>
              <li>
                <a href="javscript;">포인트수</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

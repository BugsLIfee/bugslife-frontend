import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import MypageHome from "../view/MyPage_Home";
import MypagePost from "../view/MyPage_Post";
import "../view/scss/myPage.scss";

export default class Mypagecontainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_component: "home",
    };
  }

  onClickEvent = (params) => {
    console.log(params);
    this.setState({ curr_component: `${params}` });
  };

  render() {
    const state = this.state.curr_component;

    return (
      <div className="MyPage_container">
        <h1 class="MyPage_container_title">마이 페이지</h1>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
          >
            <Menu.Item
              as="a"
              //   href="/mypage"
              onClick={() => this.onClickEvent("home")}
            >
              <br></br>
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item
              as="a"
              //   href="/mypage/posts"
              onClick={() => this.onClickEvent("post")}
            >
              <Icon name="book" />
              Post
            </Menu.Item>
            <Menu.Item
              as="a"
              //   href="/"
              onClick={() => this.onClickEvent("point")}
            >
              <i id="coin" class="fas fa-coins"></i>
              Point
            </Menu.Item>
          </Sidebar>
          <div className="MyPage_curr">
            {state === "home" && <MypageHome />}
            {state === "post" && <MypagePost />}
          </div>

          <Sidebar.Pusher>
            <Segment basic></Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

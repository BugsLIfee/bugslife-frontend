import React, { Component } from "react";
import { Dropdown, Input, Label, Menu } from "semantic-ui-react";
import {Link} from "react-router-dom";

class AdminSideMenu extends Component {
  state = { activeItem: "member" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.props.menu;
    return (
      <Menu vertical size="huge">
        <Menu.Header
          style={{ color: "white", backgroundColor: "green", padding: "20px" }}
        >
          ADMIN PAGE
        </Menu.Header>
        <Menu.Item
          name="member"
          active={activeItem === "member"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/member"
        >
          회원관리
        </Menu.Item>
        <Menu.Item
          name="member"
          active={activeItem === "report"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/report"
        >
          신고게시판 
        </Menu.Item>
        <Menu.Item
          name="board"
          active={activeItem === "board"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/board"
        >
          게시물관리
        </Menu.Item>
        <Menu.Item
          name="qna"
          active={activeItem === "qna"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/qna-all"
          qna-a-write
        >
          1:1 문의 관리
          <Menu.Menu>
            <Menu.Item
              name="write"
              active={activeItem === "write"}
              onClick={this.handleItemClick}
              as={Link}
              to="/admin/qna-all"
            >
              1:1 문의 내역 전체보기
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item
          name="info"
          active={activeItem === "info"}
          onClick={this.handleItemClick}
        >
          공지사항 관리
          <Menu.Menu>
            <Menu.Item
              name="info-list"
              active={activeItem === "info-list"}
              onClick={this.handleItemClick}
              as={Link}
              to="/admin/info-list"
            >
              Search
            </Menu.Item>
            <Menu.Item
              name="write"
              active={activeItem === "write"}
              onClick={this.handleItemClick}
              as={Link}
              to="/admin/info-write"
            >
              공지사항 작성
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AdminSideMenu;

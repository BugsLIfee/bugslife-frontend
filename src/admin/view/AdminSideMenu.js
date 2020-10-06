import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
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
          to="/admin/qna"
        >
          1:1 문의 관리
        </Menu.Item>
        <Menu.Item
          name="info"
          active={activeItem === "info"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/info"
        >
          공지사항 관리
        </Menu.Item>
      </Menu>
    );
  }
}

export default AdminSideMenu;

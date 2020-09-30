import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";

class AdminSideMenu extends Component {
  state = { activeItem: "inbox" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu vertical size="huge" >
        <Menu.Header style={{color:"white", backgroundColor:"green", padding:"20px"}}
       >관리자 페이지 
        </Menu.Header>
        <Menu.Item
          name="member"
          active={activeItem === "member"}
          onClick={this.handleItemClick}
        >
          회원관리
        </Menu.Item>
        <Menu.Item
          name="board"
          active={activeItem === "board"}
          onClick={this.handleItemClick}
        >
          게시물관리
        </Menu.Item>
        <Menu.Item
          name="qna"
          active={activeItem === "qna"}
          onClick={this.handleItemClick}
        >
          1:1 문의 관리
        </Menu.Item>
        <Menu.Item
          name="info"
          active={activeItem === "info"}
          onClick={this.handleItemClick}
        >
          공지사항 관리
        </Menu.Item>

      
      </Menu>
    );
  }
}

export default AdminSideMenu;

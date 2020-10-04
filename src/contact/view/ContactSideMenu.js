import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Menu } from "semantic-ui-react";

class ContactSideMenu extends Component {
  state = { activeItem: "qna-my" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const activeItem  = this.props.menu;
    console.log("contact side menu:", activeItem);
    return (
      <Menu vertical size="huge">
        <Menu.Header
          style={{ color: "white", backgroundColor: "green", padding: "20px" }}
        >
          CONTACT US
        </Menu.Header>
        <Menu.Item>
          <Menu.Header>
            1:1 문의 게시판
            <Menu.Menu>
              <Menu.Item
                name="qna-my"
                active={activeItem === "qna-my"}
                onClick={this.handleItemClick}
                as={Link}
                to="/contact/qna-my"
              >
                나의 문의내역
              </Menu.Item>
              <Menu.Item
                name="qna-write"
                active={activeItem === "qna-write"}
                onClick={this.handleItemClick}
                as={Link}
                to="/contact/qna-write"
              >
                1:1 문의하기
              </Menu.Item>
            </Menu.Menu>
          </Menu.Header>
        </Menu.Item>
        <Menu.Item
          
            name="info"
            active={activeItem === "info"}
            onClick={this.handleItemClick}
            as={Link}
            to="/contact/info"
          >
            공지사항 게시판
        </Menu.Item>
      </Menu>
    );
  }
}

export default ContactSideMenu;

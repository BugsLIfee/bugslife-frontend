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
     
    <div className="contactside">
        <a href="/contact/info">
          <div className="list info">
              공지사항
          </div>
        </a>
        <a href="/contct/qna-write">
          <div className="list">
              1:1문의 하기 
          </div>
        </a>
        <a href="/contact/qna-my">
          <div className="list">
              나의 1:1문의
          </div>
        </a>
    </div>
    );
  }
}

export default ContactSideMenu;

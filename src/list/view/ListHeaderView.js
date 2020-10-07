import React, { Component } from "react";
import { Segment, Header, Menu } from "semantic-ui-react";

export default class ListHeaderview extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    console.log("hihi");
    return (
      <div>
        <Header as="h3" textAlign="left">
          <h2>Q/A</h2>
        </Header>

        <Menu position="right">
          <Menu.Item
            name="최신순"
            active={activeItem === "최신순"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="조회수"
            active={activeItem === "조회수"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="추천수"
            active={activeItem === "추천수"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

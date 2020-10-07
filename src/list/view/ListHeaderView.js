import React, { Component } from "react"
import { Segment, Header, Menu } from "semantic-ui-react"

export default class ListHeaderview extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  orderByNew = () => {
    console.log("event")
  }

  render() {
    const { activeItem } = this.state
    const { onSetOrderBy } = this.props
    console.log("hihi")
    return (
      <div>
        <Header as="h3" textAlign="left">
          <h2>Q/A</h2>
        </Header>

        <Menu position="right">
          <Menu.Item
            name="최신순"
            active={activeItem === "최신순"}
            onClick={() => {
              onSetOrderBy("d")
            }}
          />
          <Menu.Item
            name="조회수"
            active={activeItem === "조회수"}
            onClick={() => {
              onSetOrderBy("v")
            }}
          />
          <Menu.Item
            name="추천수"
            active={activeItem === "추천수"}
            onClick={() => {
              onSetOrderBy("l")
            }}
          />
          <Menu.Item
            name="포인트"
            active={activeItem === "포인트"}
            onClick={() => {
              onSetOrderBy("p")
            }}
          />
        </Menu>
      </div>
    )
  }
}

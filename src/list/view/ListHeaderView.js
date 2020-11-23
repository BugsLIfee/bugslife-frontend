import React, { Component } from "react"
import { Input, Menu } from "semantic-ui-react"
import "./scss/ListMain.scss"

export default class ListHeaderview extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  orderByNew = () => {
  }

  render() {
    const { activeItem } = this.state
    const { onSetOrderBy } = this.props
    return (
      <div className="listHeader">
        
        <div>
          <Menu position="left">
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
            <Menu.Item position="right">
              <Input icon={{ name: "search", circular: true, link: true }} placeholder="Search" />
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

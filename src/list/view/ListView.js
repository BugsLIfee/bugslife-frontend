import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import ListViewFooter from "./ListViewFooter";
import ListViewLabel from "./ListViewLabel";
import ListViewMain from "./ListViewMain";

export default class ListView extends Component {
  render() {
    const { listView } = this.props;

    return (
      <div style={{ border: "1px solid #ccc" }}>
        <ListViewLabel listView={listView} />
        <ListViewMain listView={listView} />
        <ListViewFooter listView={listView} />
      </div>
    );
  }
}

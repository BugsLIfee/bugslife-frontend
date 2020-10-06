import React, { Component } from "react";
import ListView from "./ListView";
import { Grid, Image } from "semantic-ui-react";
import ListTagView from "./ListTagView";
import ListHeaderView from "./ListHeaderView";

export default class ListViews extends Component {
  render() {
    const lists = this.props.lists;
    console.log("lists:", lists);
    const list = lists.map((listView) => {
      console.log("---", listView);
      return <ListView listView={listView} />;
    });
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <ListTagView />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <ListHeaderView />
            </Grid.Row>
            {list}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

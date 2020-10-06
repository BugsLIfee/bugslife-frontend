import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import testListData from "../testListData";
import ListViewFooter from "../view/ListViewFooter";
import ListViewLabel from "../view/ListViewLabel";
import ListViewMain from "../view/ListViewMain";
import { Grid, Container } from "semantic-ui-react";
class ListViewContainer extends Component {
  render() {
    // const  list  = this.props.Store.list.getList;

    const list = testListData.map((listView) => {
      return (
        
          <Grid>
            <Grid.Column width={2}>
              <ListViewLabel listView={listView} />
            </Grid.Column>
            <Grid.Column width={12}>
              <ListViewMain listView={listView} tags={listView.tags} />
            </Grid.Column>
            <Grid.Column width={2}>
              <ListViewFooter listView={listView} />
            </Grid.Column>
          </Grid>
       
      );
    });

    console.log("container:", testListData);
    return <div>{list}</div>;
  }
}

export default ListViewContainer;

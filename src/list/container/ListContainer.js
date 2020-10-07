import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import ListHeaderContainer from "./ListHeaderContainer"
import ListTagContainer from "./ListTagContainer"
import ListViewContainer from "./ListViewContainer"
import { Grid, Container } from "semantic-ui-react"
import "../view/scss/ListMain.scss"
import "../view/scss/ListTag.scss"

@inject("Store")
@observer
class ListContainer extends Component {
  onSetListOrderBy = (e) => {
    this.props.Store.list.setListOrderBy(e)
  }

  render() {
    const list = this.props.Store.list.getList
    return (
      <Container>
        <Grid>
          <Grid.Column width={2}>
            <ListTagContainer />
          </Grid.Column>

          <Grid.Column width={14}>
            <ListHeaderContainer onSetOrderBy={this.onSetListOrderBy} />
            <ListViewContainer lists={list} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default ListContainer

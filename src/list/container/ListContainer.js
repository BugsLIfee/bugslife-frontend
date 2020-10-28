import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import ListHeaderContainer from "./ListHeaderContainer"
import ListTagContainer from "./ListTagContainer"
import ListViewContainer from "./ListViewContainer"
import { Grid } from "semantic-ui-react"
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
      <Grid className="listLayout"> 
        <Grid.Column width={9} className="listItemBox" >
        <Grid.Row className="header">
          <ListHeaderContainer onSetOrderBy={this.onSetListOrderBy} />
        </Grid.Row>
        <Grid.Row >
        {/* <Grid.Column width={2} className="listTagBox">
            <ListTagContainer />
          </Grid.Column> */}
            
            <ListViewContainer lists={list} />
        
          </Grid.Row>
          </Grid.Column>
          <div className="tagLayout">
          <Grid.Column width={3} >
        <ListTagContainer />
        </Grid.Column>
        </div>
          
      </Grid>
    )
  }
}

export default ListContainer

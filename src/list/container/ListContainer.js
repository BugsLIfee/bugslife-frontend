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

  componentDidMount(){
    const { list, oauth } = this.props.Store
    list.allList();
    oauth.getUserList();
  }

  onSetListOrderBy = (e) => {
    this.props.Store.list.setListOrderBy(e)
  }

  render() {
    const list = this.props.Store.list.getList
    const search = (keyword) => {
      this.props.Store.list.search(keyword);
    }

    return (
      <Grid className="listLayout"> 
        <Grid.Column width={9} className="listItemBox" >
        <Grid.Row className="ListGridHeader">
          <ListHeaderContainer onSetOrderBy={this.onSetListOrderBy} search ={search}/>
        </Grid.Row>
        <Grid.Row >
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

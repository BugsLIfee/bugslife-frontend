import React, { Component } from "react"
//import testListData from "../testListData"
import ListViewFooter from "../view/ListViewFooter"
import ListViewLabel from "../view/ListViewLabel"
import ListViewMain from "../view/ListViewMain"
import { Grid, Pagination } from "semantic-ui-react"
import "../view/scss/ListMain.scss"
class ListViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
    }
  }

  setNextPage = (e) => {
    this.setState({
      page: e.target.getAttribute("value"),
    })
  }

  render() {
    // const  list  = this.props.Store.list.getList;

    // const list = testListData.map((listView) => {
    const { lists } = this.props
    let listItemOne = lists.slice((this.state.page - 1) * 5, this.state.page * 5)
    let totalPage = Math.floor(lists.length / 5) //60건이라면 totalPage

    if (lists.length % 5) {
      totalPage += 1
    }
    const list = listItemOne.map((listView) => {
      return (
        <div className="list_main itemBox">
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
        </div>
      )
    })
    return (
      <div>
        {list}
        <div className="listpage paging">
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            onPageChange={this.setNextPage}
            totalPages={totalPage}
          />
        </div>
      </div>
    )
  }
}

export default ListViewContainer

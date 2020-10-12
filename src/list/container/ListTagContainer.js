import React, { Component } from "react"
import ListTagView from "../view/ListTagView"
import { inject, observer } from "mobx-react"

@inject("Store")
@observer
class ListTagContainer extends Component {

componentDidMount(){
  const { tag } = this.props.Store
    tag.tagList()
}

  render() {
    const { tag } = this.props.Store
    let taglist = tag.getTagAll
    console.log("container taglist: ", taglist)

    return (
      <div className="listTagContainer tagBox">
        <ListTagView tagAll={taglist} />
      </div>
    )
  }
}

export default ListTagContainer

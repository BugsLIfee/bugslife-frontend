import React, { Component } from "react"
import ListTagView from "../view/ListTagView"
import { inject, observer } from "mobx-react"
import { Button } from 'semantic-ui-react'
import "../view/scss/ListTag.scss"

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
      <div className="tagLayout">
        <div className="addQButton">
          <Button content='질문글 작성하기' primary className="addQButton"/>
        </div>
        <div className="tagBoxLayout">

          <span className="tagTitle">TAG</span>
        
      <div className="listTagContainer tagBox">
        <ListTagView tagAll={taglist} />
      </div>
        </div>
      </div>
    )
  }
}

export default ListTagContainer

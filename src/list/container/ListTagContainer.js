import React, { Component } from "react"
import ListTagView from "../view/ListTagView"
import { inject, observer } from "mobx-react"
import { Button } from 'semantic-ui-react'
import swal from "sweetalert";
import "../view/scss/ListTag.scss"

@inject("Store")
@observer
class ListTagContainer extends Component {

  componentDidMount(){
      const { tag } = this.props.Store
        tag.tagList()
  }

  render() {
    const { tag, oauth } = this.props.Store
    let taglist = tag.getTagAll
    const login = oauth.getCurrentUserInfo.id !== undefined

    return (
      <div>
        <div className="addQButton">
          {login ? 
            <a href="/posting">
              <Button content='질문글 작성하기' primary className="addQButton"/>
            </a>
            :
            <Button content='질문글 작성하기' primary className="addQButton" 
              onClick={() => {
                swal("로그인 후 사용가능합니다 !");
            }}/>
          }
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

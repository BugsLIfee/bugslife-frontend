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
      // const tags = this.props.Store.list.tags
  }


  onTagSearch = (tag)=>{
    const { list} = this.props.Store
    list.searchTag(tag);
  }
  

  render() {
    const { oauth, list} = this.props.Store
    const taglist = list._top10Tags 
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
        <ListTagView tagAll={taglist} searchTag={this.onTagSearch}/>
      </div>
        </div>
      </div>
    )
  }
}

export default ListTagContainer

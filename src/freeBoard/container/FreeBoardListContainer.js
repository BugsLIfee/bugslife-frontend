import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Freeboardlistview from '../view/List/FreeBoardListView'
import "../view/List/scss/FreeBoardListCon.scss"
import { Pagination } from 'semantic-ui-react'
import { Input, Menu, Button } from "semantic-ui-react"


@inject("Store")
@observer
class Freeboardlistcontainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  orderByNew = () => {
    console.log("event")
  }


    render() {
        const freeboard_list =this.props.freeboard_list;
        const freeboard_select_posts = this.props.freeboard_select_posts;
        let totalPage = Math.floor(freeboard_select_posts.length / 5) === 0? 1:  Math.floor(freeboard_select_posts.length / 5) //60건이라면 totalPage
        const { onSetOrderBy } = this.props
        const { activeItem } = this.state
      
        const {freeboardCommentSelect} = this.props.Store.freeboard;
        return (
            
            <div className="freeboard_list_wrap">
                <div className="freeboard_header_menu">
             <Menu position="left" className="listHeader headerBar">
              <Menu.Item
                name="최신순"
                active={activeItem === "최신순"}
                onClick={() => {
                  onSetOrderBy("d")
                }}
              />
              <Menu.Item
                name="조회수"
                active={activeItem === "조회수"}
                onClick={() => {
                  onSetOrderBy("v")
                }}
              />
              <Menu.Item
                name="추천수"
                active={activeItem === "추천수"}
                onClick={() => {
                  onSetOrderBy("l")
                }}
              />
              <Menu.Item position="right">
                  <Input icon={{ name: "search", circular: true, link: true }} placeholder="Search" />
              </Menu.Item>
          </Menu>
          </div>
                <div className="freeboard_list">
                    
                <div className="freeboard_list_head">
                    <div className="freeboard_list_head_title">
                    <div className="freeboard_list_post_num freeboard_list_col">NO</div>
                    <div className="freeboard_list_post_cate freeboard_list_col">카테고리</div>
                    <div className="freeboard_list_post_title freeboard_list_col">제목</div>
                    <div className="freeboard_list_post_date freeboard_list_col">등록일</div>
                    <div className="freeboard_list_post_view freeboard_list_col">조회수</div>
                </div>
              
                </div>
                <Freeboardlistview id="free_list" freeboardCommentSelect= {freeboardCommentSelect} freeboard_list={freeboard_select_posts.length ===0 ? freeboard_list : freeboard_select_posts} />
                <div className="free_list_pagination">

                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    onPageChange={this.setNextPage}
                    totalPages={totalPage}
                />

              <Button secondary as="a" href="/posting_fr">글쓰기</Button>
            
                </div>

              
                </div>
            </div>
        )
    }
}
export default  Freeboardlistcontainer ;
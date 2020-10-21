import React, { Component } from 'react'
import Freeboardlistview from '../view/List/FreeBoardListView'
import "../view/List/scss/FreeBoardListCon.scss"
import { Pagination } from 'semantic-ui-react'
import { Input, Menu, Button } from "semantic-ui-react"


export default class Freeboardlistcontainer extends Component {

    render() {
        const freeboard_list =this.props.freeboard_list;
        return (
            
            <div className="freeboard_list_wrap">
                <div className="freeboard_header_menu">
        <Menu position="left" className="listHeader headerBar">
              <Menu.Item
                name="최신순"
                // active={activeItem === "최신순"}
                // onClick={() => {
                //   onSetOrderBy("d")
                // }}
              />
              <Menu.Item
                name="조회수"
                // active={activeItem === "조회수"}
                // onClick={() => {
                //   onSetOrderBy("v")
                // }}
              />
              <Menu.Item
                name="추천수"
                // active={activeItem === "추천수"}
                // onClick={() => {
                //   onSetOrderBy("l")
                // }}
              />
              <Menu.Item position="right">
                  <Input icon={{ name: "search", circular: true, link: true }} placeholder="Search" />
              </Menu.Item>
          </Menu>
          </div>
                <div className="freeboard_list">
                    
                <div className="freeboard_list_head">
                    <div className="freeboard_list_head_title">
                    <div className="freeboard_list_post_num freeboard_list_col">글 번호</div>
                    <div className="freeboard_list_post_cate freeboard_list_col">카테고리</div>
                    <div className="freeboard_list_post_title freeboard_list_col">제목</div>
                    </div>
                
                <div className="freeboard_list_head_info">
                <div className="freeboard_list_post_date freeboard_list_col">등록일</div>
                    <div className="freeboard_list_post_view freeboard_list_col">조회수</div>
                </div>
                    
                </div>
                <Freeboardlistview id="free_list" freeboard_list={freeboard_list} />
                <div className="free_list_pagination">

                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                />

<Button secondary>글쓰기</Button>
            
                </div>

              
                </div>
            </div>
        )
    }
}

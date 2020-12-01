import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Freeboardlistview from '../view/List/FreeBoardListView'
import "../view/List/scss/FreeBoardListCon.scss"
import { Menu } from "semantic-ui-react"
import Freeboardsearch from './FreeboardSearch'


@inject("Store")
@observer
class Freeboardlistcontainer extends Component {
  state = ({searchPost : ""})

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  onReset=()=>{
    return this.setState({ searchPost: "" })
  }

  onSearchPost=(postTitle)=>{
    this.setState({searchPost : postTitle })

  }

    render() {
        const freeboard_list =this.props.freeboard_list;
        const freeboard_select_posts = this.props.freeboard_select_posts;

        // userList.filter(val=> {return val.email ===this.state.searchUser})[0]
        const freeboard_search_list = freeboard_list.filter(val=> {return val.title.includes(this.state.searchPost)})
        const { onSetOrderBy } = this.props
        const { activeItem } = this.state
       
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

                <div className="freeboard_searchBar">
              <Freeboardsearch list = {freeboard_list} onReset={this.onReset} onSearchPost={this.onSearchPost}/>
              </div>
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

                {
                  this.state.searchPost.length === 0 ? 
                
                (<Freeboardlistview id="free_list" freeboard_list={freeboard_select_posts.length ===0 ? freeboard_list : freeboard_select_posts} />)

                   :          
                
                (<Freeboardlistview id="free_sel_list" freeboard_list={freeboard_search_list} />)
                } 

                </div>
            </div>
        )
    }
}
export default  Freeboardlistcontainer ;
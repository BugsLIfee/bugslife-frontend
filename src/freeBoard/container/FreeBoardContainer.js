import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import FreeboardcateContainer from './FreeBoardCateContainer'
import "../view/List/scss/FreeBoard.scss"
import Freeboardlistcontainer from './FreeBoardListContainer'
import FreeboardRoutes from '../../routes/FreeboardRoutes'

@inject("Store")
@observer
class FreeBoardContainer extends Component {

    componentDidMount(){
    this.props.Store.freeboard.freeboardList();
    }

    onSetListOrderBy = (e) => {
        this.props.Store.freeboard.setListOrderBy(e)
      }

    render() {
        console.log("here is freeboardContainer")
        // const {freeboard_list}= this.props.Store.postList();
        const {freeboard_list}= this.props.Store.freeboard
        const {freeboard_cate} = this.props.Store.freeboard
        const {freeboard_select_posts} =this.props.Store.freeboard
        const match = this.props.match;


        return(
            <div className="freeboard_container_wrap"> 
             
                <div className="free_borad_title">
                    <h1>자유게시판</h1>
                </div>
                <div className="free_board_content">
                    <div className='freeboard_cate'>
                        <FreeboardcateContainer freeboard_cate ={freeboard_cate} />
                    </div>
                    <div className='freeboard_list'>
                        <Freeboardlistcontainer onSetOrderBy={this.onSetListOrderBy} freeboard_list={freeboard_list} freeboard_select_posts={freeboard_select_posts}/> 
                    </div>
                  
                
                </div>

            </div>
        
    )}
}

export default FreeBoardContainer ;
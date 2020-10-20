import React, { Component } from 'react'
import Freeboardlistview from '../view/FreeBoardListView'
import { inject, observer } from "mobx-react"
import FreeboardcateContainer from './FreeBoardCateContainer'
import "../view/scss/FreeBoard.scss"
import Freeboardlistcontainer from './FreeBoardListContainer'

@inject("Store")
@observer
class FreeBoardContainer extends Component {

    render() {
        const {freeboard_list}= this.props.Store.freeboard
        const {freeboard_cate} = this.props.Store.freeboard
    return(
            <div className="freeboard_container_wrap"> 
                <div className="free_borad_title"><h1>자유게시판</h1></div>
                <div className="free_board_content">
                <FreeboardcateContainer freeboard_cate ={freeboard_cate} />
                <Freeboardlistcontainer freeboard_list={freeboard_list} />
                
                </div>

            </div>
        
    )}
}

export default FreeBoardContainer ;
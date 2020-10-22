import React, { Component } from 'react'
import Freeboardlistview from '../view/FreeBoardListView'
import "../view/scss/FreeBoardListCon.scss"

export default class Freeboardlistcontainer extends Component {

    render() {
        const freeboard_list =this.props.freeboard_list;
        return (
            <div className="freeboard_list_wrap">
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
                </div>
            </div>
        )
    }
}

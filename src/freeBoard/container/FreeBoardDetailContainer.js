import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import { configure } from "mobx"
import Freeboarddetailview from '../view/detail/FreeboardDetailView'
import "../view/detail/scss/FreeboardDetailiCon.scss"



@inject("Store")
@observer
class Freeboarddetailcontainer extends Component {




    render() {
        const {freeboard_detail} = this.props.Store.freeboard;
        console.log(JSON.stringify(freeboard_detail))
        return (
            <div className="freeboard_detail_wrap">
                <div className="freeboard_detail_cate"> <h4>연애</h4> </div>
                <div className="freeboard_detail_postcontainer">
                    {/* <div className="freeboard_detail_head">
                        <div className="freeboard_detail_head_title">
                        <div className="freeboard_detail_post_num freeboard_detail_col">글 번호</div>
                        <div className="freeboard_detail_post_title freeboard_detail_col">제목</div>
                    </div>
                    
                    <div className="freeboard_detial_head_info">
                        <div className="freeboard_detail_post_date freeboard_detail_col">등록일</div>
                        <div className="freeboard_detail_post_view freeboard_detail_col">조회수</div>
                    </div>
                        
                </div>           */}
                    <Freeboarddetailview detail = {freeboard_detail}/>
                </div>

            </div>
        )
    }
}
export default Freeboarddetailcontainer;
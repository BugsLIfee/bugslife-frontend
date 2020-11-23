import React, { Component } from 'react';
import FreeboardPostContent from '../../freeBoard/view/detail/FreeboardPostContent';
import "./scss/infoDetail.scss"

class InfoDetail extends Component {
    render() {
        const {info, onDelete} = this.props;


        return (
          <div>
         
                <div className="infoDetail_container">  
                    <div className="infoDetail_nav">
                        <div className="infoDetail_nav_left" >
                            <a href="/admin/info-list"><h4>목록</h4></a>
                        </div>

                        <div className="infoDetail_nav_right">   
                            <a href={`/admin/info-write/?id=${info.id}`}><h4>수정</h4></a>
                            <a href="#" onClick={()=>onDelete(info.id)}><h4>삭제</h4></a>
                        </div>

                    </div>
                    <hr />
                    
                    <div className="info_detail_content">
                        <div className="info_detail_content_header">
                          <h2>{info.title}</h2>
                          <div className="content_meta"> 
                            <h4> {info.adminCategory}</h4>        
                            <h5> 작성일 : {info.registDate}</h5>
                            <h5> 조회수 : {info.viewCnt}</h5>
                            {/* <h5> 댓글 수 : [{comments.length}]</h5> */}
                       </div> 
                        </div>  
                        <div className="info_detail_content_body">
                            <div> 
                                <FreeboardPostContent content = {info.content !== undefined? info.content : "<div>no value</div>"} /> 
                            </div> 
                        </div>
                    
                    </div>

                </div>
          </div>
        );
    }
}

export default InfoDetail;
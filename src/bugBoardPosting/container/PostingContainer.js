import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom";
import PostingView from "../view/PostingView"

@withRouter
@inject('Store')
@observer
class PostingContainer extends Component {
    
    render() {
        
        function getFormatDate(date){
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '-' + month + '-' + day;
        }

        const { bugBoardPosting } = this.props.Store;
        const { oauth, point } = this.props.Store;
        const onAddPost = (postObj) => {
            postObj.writer = oauth.getCurrentUserInfo.id;
            postObj.dueDate = getFormatDate(postObj.dueDate)
            bugBoardPosting.onAddPost(postObj);

            const pointObj = {
                userId: oauth.getCurrentUserInfo.id,
                amout: -postObj.point,
                detail: "질문등록"
            }
            point.onAddPoint(pointObj)
        }
        return (
            <div>
                <PostingView onAddPost={onAddPost} user = {oauth.getCurrentUserInfo}/>
            </div>
        );
    }
}

export default PostingContainer;
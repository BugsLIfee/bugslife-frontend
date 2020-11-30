import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom";
import swal from "sweetalert";
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
        const user = oauth.getCurrentUserInfo

        const onAddPost = async (postObj) => {
            if(user.point-postObj.point<0) {
                let result = await swal({
                    title: "포인트가 부족합니다. 충전하시겠습니까?", 
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                })

                if(result) {
                    this.props.history.push({pathname: '/myPage'})
                }
            } else if( postObj.premium===true && postObj.point <2000)  {
                swal("프리미엄 질문은 2000포인트부터 가능합니다.");
            }
            else {
                postObj.writer = oauth.getCurrentUserInfo.id;
                postObj.dueDate = getFormatDate(postObj.dueDate)
                bugBoardPosting.onAddPost(postObj);
    
                if(postObj.point >0) {
                    const pointObj = {
                        userId: oauth.getCurrentUserInfo.id,
                        amount: -postObj.point,
                        detail: "질문등록"
                    }
                    point.onAddPoint(pointObj)
                }
                this.props.history.push({pathname: '/list'})
                window.location.reload();
            }
        }
        return (
            <div>
                <PostingView onAddPost={onAddPost} user = {oauth.getCurrentUserInfo}/>
            </div>
        );
    }
}

export default PostingContainer;
import React, { Component } from 'react'
import "../scss/EduDetail.scss"
import swal from 'sweetalert'

export class EduAddReviewView extends Component {
    render() {

        const {onInsertForm,oauth,checkReview,check,eduInfo} = this.props;
        console.log(oauth.getCurrentUserInfo.id)
        console.log(eduInfo.id)
        // console.log(checkReview(oauth.getCurrentUserInfo.id))
        checkReview(oauth.getCurrentUserInfo.id,eduInfo.id)
        console.log(check)
        return (

                <div className="blue_btn">
                    <button className="blue_btn_" 
                    onClick={() => { oauth.isLogin ? 
                    ( check ? swal("이미 작성하신 리뷰가 존재합니다.") : onInsertForm()) 
                    : swal("로그인 후 이용이 가능합니다.") }}><h2>후기 작성하기</h2></button>
                </div>
        )
    }
}

export default EduAddReviewView

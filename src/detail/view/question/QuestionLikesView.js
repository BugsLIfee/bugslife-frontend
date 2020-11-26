import React, { Component } from "react";
import swal from "sweetalert";
import "../scss/post.scss"

export default class QuestionLikesView extends Component {

    render() {

        const { question_likes, question_clicked_like, onQuestionLike, login } = this.props;

        const onClickLike = () => {
            if(login) {
                onQuestionLike();
            } else {
                swal("로그인이 필요합니다!");
            }
        }

        return(
            <div className="detail_question_likes">
                <div>
                    <p>{question_likes}</p>
                    <div>나도 궁금해요!</div>
                </div>
                    {!question_clicked_like ? <img src="../detail/empty_bookmark.png" alt = "question_like_unclicked" onClick={onClickLike} /> 
                    : <img alt="question_like_clicked" src="../detail/bookmark.png" onClick={onClickLike} />}
            </div>
        )
    }
}

import React, { Component } from "react";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/post.scss"

export default class QuestionLikesView extends Component {

    render() {

        const { question_likes, question_clicked_like, onQuestionLike } = this.props;

        return(
            <div className="detail_question_likes">
                <div>
                    <p>{question_likes}</p>
                    <div>나도 궁금해요!</div>
                </div>
                    {!question_clicked_like ? <img src="../detail/empty_bookmark.png" onClick={() => {onQuestionLike()}} /> : <img src="../detail/bookmark.png" onClick={() => {onQuestionLike()}} />}
            </div>
        )
    }
}

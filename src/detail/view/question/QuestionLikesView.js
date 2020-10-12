import React, { Component } from "react";
import "../scss/post.scss"

export default class QuestionLikesView extends Component {

    render() {

        const { onQuestionLike, question } = this.props;

        const clicked_like = question.clicked_like;

        return(
            <div className="detail_question_likes">
                <div>
                    <p>{question.likes}</p>
                    <div>나도 궁금해요!</div>
                </div>
                    {!clicked_like && <img src="../detail/empty_bookmark.png" onClick={() => {onQuestionLike()}} />}
                    {clicked_like && <img src="../detail/bookmark.png" onClick={() => {onQuestionLike()}} />}
            </div>
        )
    }
}

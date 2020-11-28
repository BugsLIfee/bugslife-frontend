import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import QuestionLikesView from "../../view/question/QuestionLikesView"

@inject("Store")
@observer
class QuestionLikesContainer extends Component {

    render() {

        const userId = this.props.Store.oauth.getCurrentUserInfo.id
        const onQuestionLike = () => {
            this.props.Store.detail.setQuestionLike(userId);
        }
        
        const {question_likes, question_clicked_like} = this.props.Store.detail;
        const login = userId ? true : false
        return (
            <div>
                <QuestionLikesView 
                    question_likes={question_likes} 
                    question_clicked_like = {question_clicked_like}
                    login={login} 
                    onQuestionLike={onQuestionLike} />
            </div>
        );
    }
}

export default QuestionLikesContainer;

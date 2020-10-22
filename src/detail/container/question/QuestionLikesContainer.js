import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import QuestionLikesView from "../../view/question/QuestionLikesView"

@inject("Store")
@observer
class QuestionLikesContainer extends Component {

    render() {

        const onQuestionLike = () => {
            this.props.Store.detail.setQuestionLike();
        }
        
        // const question = this.props.Store.detail._question;
        const login = this.props;

        const {question_likes, question_clicked_like} = this.props.Store.detail;

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

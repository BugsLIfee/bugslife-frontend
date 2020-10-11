import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import QuestionLikesView from "../../view/question/QuestionLikesView"

@inject("Store")
@observer
class QuestionLikesContainer extends Component {

    render() {

        const onQuestionLike = () => {
            this.props.Store.detail.setQuestionLike(question.clicked_like);
        }
        
        const question = this.props.Store.detail._question;
        const login = this.props;

        return (
            <div>
                <QuestionLikesView question={question} login={login} onQuestionLike={onQuestionLike} />
            </div>
        );
    }
}

export default QuestionLikesContainer;

import React, { Component } from "react";
import QuestionView from "../view/question/QuestionView";
import AnswerListView from "../view/answer/AnswerListView";
import { observer, inject } from 'mobx-react';

import qs from "qs";
import { withRouter } from "react-router-dom";

@withRouter
@inject("Store")
@observer
class DetailContainer extends Component {

    render() {
        const searchObj = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        });
        const onAnswerLike = (answer_id, dir) => {
            this.props.Store.detail.setAnserLikes(answer_id, dir);
        }

        const onQuestionLike = () => {
            this.props.Store.detail.setQuestionLike(clicked_like);
        }
        
        const login = searchObj.login;
        const detail= this.props.Store.detail;
        const { clicked_like } = this.props.Store.detail._question;
        const { answers } = this.props.Store.detail._answers;

        return (
            <div>
                <QuestionView question={detail._question} login={login} clicked_like={clicked_like} onQuestionLike={onQuestionLike} />
                <AnswerListView answers={answers} login={login} onAnswerLike={onAnswerLike} /> 
            </div>
        );
    }

}

export default DetailContainer;

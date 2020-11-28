import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import AnswerLikesView from "../../view/answer/AnswerLikesView"

@inject("Store")
@observer
class AnswerLikesContainer extends Component {

    render() {
        const userId = this.props.Store.oauth.getCurrentUserInfo.id;
        const onAnswerLike = (answer_id, dir) => {
            this.props.Store.detail.setAnswerLike(answer_id, dir, userId);
        }
        const { answer } = this.props;
        const myQuestion = userId===answer.writerId
        const login = userId ? true : false
        console.log("이게 안찍혀?",login)

        return (
            <div>
                <AnswerLikesView answer={answer} login={login} onAnswerLike={onAnswerLike} />
            </div>
        );
    }
}

export default AnswerLikesContainer;

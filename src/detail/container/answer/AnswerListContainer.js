import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import AnswerContainer from "./AnswerContainer";

@inject("Store")
@observer
class AnswerListContainer extends Component {

    render() {

        const answers = this.props.Store.detail._answers;            
        const login = this.props.Store.oauth.getCurrentUserInfo.id ? true : false 
        const userList = this.props.Store.oauth.userList;

        const answerList = answers.map(answer => {
            const user = userList.find(user => {
                return user.id === answer.writerId
            })
            return (
                <AnswerContainer 
                    answer = { answer } 
                    login = { login } 
                    writer = {user}
                    key= { answer.id } />
            )
        })

        return (
            <div>
                {answerList}
            </div>
        );
    }
}

export default AnswerListContainer;

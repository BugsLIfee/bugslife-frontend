import React, { Component } from "react";
import QuestionHeaderView from "../../view/question/QuestionHeaderView";
import { observer, inject } from 'mobx-react';

@inject("Store")
@observer
class QuestionHeaderContainer extends Component {

    render() {
        const question = this.props.Store.detail._question;
        const onDeleteQuestion = (id) => {
            this.props.Store.detail.onDeleteQuestion(id);
        }
        const currentUser = this.props.Store.oauth.getCurrentUserInfo;
        const userList = this.props.Store.oauth.userList;

        const questionHeaderView = Object.keys(question).length !==0
            ? <QuestionHeaderView 
                question={ question } 
                currentUser = {currentUser} 
                userList = {userList}
                onDeleteQuestion = {onDeleteQuestion}/> : "" 
        
        return (
            <div>
                {questionHeaderView}
            </div>
        );
    }
}

export default QuestionHeaderContainer;

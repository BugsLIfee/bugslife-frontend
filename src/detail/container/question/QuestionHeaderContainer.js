import React, { Component } from "react";
import QuestionHeaderView from "../../view/question/QuestionHeaderView";
import { observer, inject } from 'mobx-react';

@inject("Store")
@observer
class QuestionHeaderContainer extends Component {

    
    render() {

        this.props.Store.detail.selectQuestion(1);
        const question = this.props.Store.detail._question;
        console.log("퀘스찬!",question);

        console.log("퀘스찬헤드컨테이너",question.body);
        return (
            <div>
                <QuestionHeaderView question={ question } />
            </div>
        );
    }
}

export default QuestionHeaderContainer;

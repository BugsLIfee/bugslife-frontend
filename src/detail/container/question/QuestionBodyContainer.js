import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import QuestionBodyView from "../../view/question/QuestionBodyView"

@inject("Store")
@observer
class QuestionBodyContainer extends Component {

    render() {
        this.props.Store.detail.selectQuestion(1);
        const question = this.props.Store.detail._question;
        console.log(question);

        return (
            <div>
                <QuestionBodyView question={question} />
            </div>
        );
    }
}

export default QuestionBodyContainer;

import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import QuestionBodyView from "../../view/question/QuestionBodyView"

@inject("Store")
@observer
class QuestionBodyContainer extends Component {

    render() {
        const question = this.props.Store.detail._question;

        const questionBodyView = Object.keys(question).length !== 0 ? <QuestionBodyView question={ question } /> : "";
        return (
            <div>
                {questionBodyView}
            </div>
        );
    }
}

export default QuestionBodyContainer;

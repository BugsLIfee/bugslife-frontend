import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import QuestionBodyView from "../../view/question/QuestionBodyView"

@inject("Store")
@observer
class QuestionBodyContainer extends Component {

    render() {

        const question = this.props.Store.detail._question;

        return (
            <div>
                <QuestionBodyView question={question} />
            </div>
        );
    }
}

export default QuestionBodyContainer;

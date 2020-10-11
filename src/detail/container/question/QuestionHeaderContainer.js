import React, { Component } from "react";
import QuestionHeaderView from "../../view/question/QuestionHeaderView";
import { observer, inject } from 'mobx-react';

@inject("Store")
@observer
class QuestionHeaderContainer extends Component {

    render() {

        const question = this.props.Store.detail._question;

        return (
            <div>
                <QuestionHeaderView question={question} />
            </div>
        );
    }
}

export default QuestionHeaderContainer;

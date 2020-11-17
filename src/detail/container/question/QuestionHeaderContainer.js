import React, { Component } from "react";
import QuestionHeaderView from "../../view/question/QuestionHeaderView";
import { observer, inject } from 'mobx-react';

@inject("Store")
@observer
class QuestionHeaderContainer extends Component {

    // componentDidMount() {
    //     this.props.Store.detail.selectQuestion(1);
    // }

    render() {

        const question = this.props.Store.detail._question;
        const questionHeaderView = Object.keys(question).length !== 0 ? <QuestionHeaderView question={ question } /> : "" 
        return (
            <div>
                {questionHeaderView}
            </div>
        );
    }
}

export default QuestionHeaderContainer;

import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import AnswerContainer from "./AnswerContainer";

@inject("Store")
@observer
class AnswerListContainer extends Component {

    render() {

        const answers = this.props.Store.detail._answers;            
        const { login } = this.props;

        const answerList = answers.map(answer => {
            return (
                <AnswerContainer answer = { answer } login = { login } key= { answer.id } />
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

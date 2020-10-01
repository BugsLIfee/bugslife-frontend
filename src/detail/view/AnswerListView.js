import React, {Component} from 'react';
import AnswerView from './AnswerView';

export default class AnswerListView extends Component {
    render() {
        // const { books, onSelect } 
        const { answers } = this.props; 
        const { login } = this.props;
        console.log("AnswerList ",answers);
        const answerList = answers.map(answer => {
            return (
                <AnswerView answer={answer} login={login} /> 
            )
        });

        return (
            answerList
        );
    }
}

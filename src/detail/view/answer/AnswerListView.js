import React, {Component} from 'react';
import AnswerView from './AnswerView';
import InsertAnswerView from './InsertAnswerView';
import "../scss/answerList.scss";
import AddAnswerView from './AddAnswerView';

export default class AnswerListView extends Component {
    render() {
        // const { books, onSelect } 
        const { answers, login, insertForm, onInsertForm } = this.props; 
        console.log("IN ANSWERLISTVIEW: " , insertForm);
        const answerList = answers.map(answer => {
            return (
                <AnswerView answer={answer} login={login} /> 
            )
        });

        return (
            <div className="detail_answer_list">
                {answerList}
                {login==="true" && (insertForm && <InsertAnswerView />)}
                {login==="true" && (!insertForm && <AddAnswerView onInsertForm={onInsertForm} />)}
            </div>
        );
    }
}

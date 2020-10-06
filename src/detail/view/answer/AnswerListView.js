import React, {Component} from 'react';
import AnswerView from './AnswerView';
import InsertAnswerView from './InsertAnswerView';
import "../scss/answerList.scss";
import AddAnswerView from './AddAnswerView';

export default class AnswerListView extends Component {
    render() {
        // const { books, onSelect } 
        console.log("ANSWERLISTVIEW");
        const detail = this.props.detail;
        const answers = detail._answers;
        const { login, insertForm, onInsertForm } = this.props; 
        // console.log("ANswerListView",answers);
        const answerList = answers.map(answer => {
            return (
                <AnswerView answer={answer} detail={detail} login={login} /> 
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

import React, {Component} from 'react';
import AnswerView from './AnswerView';
import InsertAnswerView from './InsertAnswerView';
import "../scss/answerList.scss";
import AddAnswerView from './AddAnswerView';

export default class AnswerListView extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            insertForm : false,
        }
    }

    render() {
        
        const onInsertForm = () => {
            this.setState({insertForm : !insertForm});
        }

        const { answers, login, onAnswerLike } = this.props; 
        const { insertForm } = this.state;

        const answerList = answers.map(answer => {
            return (
                <AnswerView answer={answer} login={login} onAnswerLike={onAnswerLike} /> 
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

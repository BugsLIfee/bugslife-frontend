import React, { Component } from "react";
import InsertAnswerView from "../../view/answer/AddAnswerView";
import AddAnswerView from "../../view/answer/InsertAnswerView";
import "../../view/scss/answerList.scss";
import { inject, observer } from "mobx-react";

@inject('Store')
@observer
class AddAnswerContainer extends Component {
    
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

        const onAddAnswer = (answerObj) => {
            this.props.Store.detail.onAddAnswer(answerObj);
        }

        const { insertForm } = this.state;
        const questionId = this.props.questionId;
        
        return (
            <div className="detail_answer_list">
                {!insertForm ? 
                    <InsertAnswerView onInsertForm={onInsertForm} /> 
                    : <AddAnswerView onInsertForm={onInsertForm} 
                                    onAddAnswer={onAddAnswer} 
                                    questionId = {questionId} />}
            </div>
        );
    }
}

export default AddAnswerContainer;

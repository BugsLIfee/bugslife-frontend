import React, { Component } from "react";
import InsertAnswerView from "../../view/answer/AddAnswerView";
import AddAnswerView from "../../view/answer/InsertAnswerView";
import "../../view/scss/answerList.scss";
import swal from "sweetalert";
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
        const {oauth} = this.props.Store;
        const onInsertForm = () => {
            if(oauth.getCurrentUserInfo.id===undefined) {
                swal("로그인 후 사용가능합니다 !");
            } else {
                this.setState({insertForm : !insertForm});
            }
        }

        const onAddAnswer = (answerObj) => {
            answerObj.writerId = oauth.getCurrentUserInfo.id;
            answerObj.writerName = oauth.getCurrentUserInfo.name;
            answerObj.writerLevel = oauth.getCurrentUserInfo.level;
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

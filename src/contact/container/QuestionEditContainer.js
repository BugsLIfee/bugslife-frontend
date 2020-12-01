import React, { Component } from "react";
import QuestionEdit from "../view/QuestionEdit";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer

class QuestionEditContainer extends Component {
  question = this.props.Store.question;

  onSetInfoProp = (name, value) => {
    this.question.setInfoProp(name, value);
  };

  onAddInfo = (QuestionObj) => {
    this.question.onAddQuestion(QuestionObj);
    alert("성공");
  };

  onRemoveInfo = () => {
    let questionData = this.question.getQuestion;
    this.question.removeInfo(questionData.id);
  };

  onModifyInfo = () => {
    let questionData = this.question.getQuestion;

    this.question.modifyInfo(questionData);
  };
  render() {
   
    return (
      <div>
        
        <QuestionEdit
          question={this.question.getQuestion}
          onSetQuestionProp={this.onSetQuestionProp}
          onAddQuestion={this.onAddQuestion}
          onRemoveQuestion={this.onRemoveQuestion}
          onModifyQuestion={this.onModifyQuestion}
        />
      </div>
    );
  }
}
export default QuestionEditContainer;

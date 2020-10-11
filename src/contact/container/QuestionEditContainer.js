import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
    //TodoStore의 addTodo(todo) 호출
    
   // let QuestionData = this.question.getQuestion;
    
    console.log("addInfo함수 호출", QuestionObj);
   
    this.question.onAddQuestion(QuestionObj);
    alert("성공");
    //document.location.href="/info-list";
  };

  onRemoveInfo = () => {
    let questionData = this.question.getQuestion;
    console.log("remvoe----", questionData.id);
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

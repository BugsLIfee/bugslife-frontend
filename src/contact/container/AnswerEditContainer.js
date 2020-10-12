import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import answerEdit from "../view/answerEdit";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class AnswerEditContainer extends Component {
  answer = this.props.Store.answer;

  onSetAnswerProp = (name, value) => {
    this.answer.setAnswerProp(name, value);
  };

  onAddAnswer = (answerObj) => {
    //TodoStore의 addTodo(todo) 호출
    
   // let answerData = this.answer.getanswer;
    
    console.log("addAnswer함수 호출", answerObj);
   
    this.answer.onAddanswer(answerObj);
    alert("성공");
    //document.location.href="/Answer-list";
  };

  onRemoveAnswer = () => {
    let answerData = this.answer.getAnswer;
    console.log("remvoe----", answerData.id);
    this.answer.removeAnswer(answerData.id);
  };

  onModifyAnswer = () => {
    let answerData = this.answer.getAnswer;

    this.answer.modifyAnswer(answerData);
  };
  render() {
   
    return (
      <div>
        <answerEdit
          answer={this.answer.getAnswer}
          onSetAnswerProp={this.onSetAnswerProp}
          onAddAnswer={this.onAddAnswer}
          onRemoveAnswer={this.onRemoveAnswer}
          onModifyAnswer={this.onModifyAnswer}
        />
      </div>
    );
  }
}
export default AnswerEditContainer;

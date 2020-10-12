import React, { Component } from 'react';
import QuestionDetail from "../view/QuestionDetail";
import AnswerWrite from "../view/AnswerWrite";
import AnswerDetail from "../view/AnswerDetail";
//import { observer, inject } from "mobx-react";

class QuestionDetailContainer extends Component {
    render() {
        const answer ="";
        return (
            <div>
               <QuestionDetail />
               {answer
               ?
               <AnswerDetail/>
               :
               <AnswerWrite/>
               }
            </div>
        );
    }
}

export default QuestionDetailContainer;